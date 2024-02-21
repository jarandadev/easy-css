import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";

export const Background = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => theme === 'dark' ? setTheme('light') : setTheme('dark');
  return (
    <>
      <div>
        <div className="flex justify-end w-full fixed right-6 top-6">
          <Switch onClick={changeTheme} />
        </div>
      </div>
      {theme === 'light' ? (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      ) : (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      )}</>
  )
}
