import { useNavigate } from "react-router-dom"
import { Button, InputField, Logo, Card } from "../components/basics"

export function Login(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="m-6 md:hidden">
                <Logo/>
            </div>
            <div className="md:flex md:items-center">
                <Card>
                <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold tracking-tighter">Login</h3>
                        <p className="mt-1.5 text-sm font-medium">Welcome back, enter your credentials to continue.
                        </p>
                    </div>
                    <div className="p-2">
                        <InputField title='Username' />
                        <InputField title='Password' />
                        <div className="flex items-center justify-center">
                            <Button title='Log In' />
                        </div>
                        <div 
                            className="m-3 flex items-center justify-end text-sm font-medium text-foreground underline cursor-pointer"
                            onClick={()=>{navigate('/register')}} 
                        >
                            Not a Member? Register
                    </div>
                </div>
                </Card>
                <div className="m-6 md:m-24 sm:hidden md:block">
                    <Logo size='24'/>
                </div>
            </div>
        </div>
    )
}

export function Register(){
    const navigate = useNavigate();

    return(
        <div>
            <div className="m-6 md:hidden">
                <Logo size='24'/>
            </div>
            <div className="md:flex md:items-center">
                <div className="m-6 md:m-24 sm:hidden md:block">
                    <Logo size='24'/>
                </div>
                <Card>
                <div className="flex flex-col p-6">
                        <h3 className="text-xl font-semibold tracking-tighter">Register</h3>
                        <p className="mt-1.5 text-sm font-medium">Welcome to BloggR
                        </p>
                    </div>
                    <div className="p-2">
                        <InputField title='Username' />
                        <InputField title = 'E-mail' />
                        <InputField title='Password' />
                        <InputField title='Confirm Password' />
                        <div className="flex items-center justify-center">
                            <Button title='Register' />
                        </div>
                        <div 
                            className="m-3 flex items-center justify-end text-sm font-medium text-foreground underline cursor-pointer"
                            onClick={()=>{navigate('/login')}} 
                        >
                            Already a Member? Login
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}