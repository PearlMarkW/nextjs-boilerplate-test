"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
// import { Switch } from "@nextui-org/switch";
import { MoonIcon } from "@/components/Icon/MoonIcon";
import { SunIcon } from "@/components/Icon/SunIcon";
const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();

    useEffect(() =>{
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleTheme=()=>{
        if(theme === "light"){

            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return (
        <div>
            <Switch
                defaultSelected
                size="lg"
                color="success"
                onClick={handleTheme}
                // onChange={handleTheme}
                startContent={<SunIcon /> }
                endContent={<MoonIcon />}
            >
                Dark mode
            </Switch>
        </div>
    );
};

export default ThemeSwitcher;