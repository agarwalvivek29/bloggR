export function InputField({ title }){
    return(
        <div className="m-3 group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <div className="flex justify-between">
                <label
                    className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">{title}
                </label>
            </div>
            <input type="text" name={title}
                autoComplete="off"
                className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground" />
        </div>
    )
}

export function Logo({size='6'}){
    const className = `w-${size} h-${size}`
    console.log(className);
    return(
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className='w-24 h-24'>
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5" />
                </svg>
            </div>
            BloggR
        </div>
    )
}

export function Button({ title, cb = ()=>{}}){
    return(
        <button
            className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black px-8 py-4"
            type="submit"
            onClick={cb}
            >{title}
        </button>
    )
}

export function Wrapper({children}){
    return(
        <div className="bg-black text-white flex min-h-screen flex-col items-center sm:justify-center">
            {children}
        </div>
    )
}

export function Card({ children }){
    return(
        <div className="w-96 mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none" >
                {children}
        </div>
    )
}   