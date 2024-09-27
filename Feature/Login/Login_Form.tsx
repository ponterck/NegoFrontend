import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/store/authSlice"; 
import { useRouter } from "next/router";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  
  const dispatch = useDispatch();
  const router = useRouter();

  
  const testCredentials = {
    username: "testuser",
    password: "#10testpassword"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (username.trim() === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (password.trim().length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    
    if (!usernameError && !passwordError) {
      if (username === testCredentials.username && password === testCredentials.password) {
        console.log("Login successful");
        dispatch(login()); 
        router.push("/"); 
      } else {
        alert("Credenciales incorrectas."); 
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  isError={usernameError}
                  required
                />
                {usernameError && (
                  <p className="text-red-500 text-sm">El usuario no puede estar vacío.</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="*******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isError={passwordError}
                  required
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">La contraseña debe tener al menos 6 caracteres.</p>
                )}
              </div>
            </div>
            <CardFooter className="pt-4 pb-4 flex justify-center">
              <Button type="submit" className="w-1/2">Inicia sesión</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
