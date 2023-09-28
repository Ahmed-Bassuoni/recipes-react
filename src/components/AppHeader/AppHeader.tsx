import { AppLogo } from "../AppLogo/AppLogo";
import { QuickSearch } from "../QuickSearch/QuickSearch";
import { useAppHeader } from "./AppHeader.hooks";



export const AppHeader = () => {
    const { goToHome } = useAppHeader();
    return (
        <header className="app-header">
            <div className="container">
                <div className="flex items-center">
                    <AppLogo onClick={goToHome} />
                    <div className="flex flex-1 justify-center">
                        <QuickSearch />
                    </div>
                </div>
            </div>
        </header>
    );
};
