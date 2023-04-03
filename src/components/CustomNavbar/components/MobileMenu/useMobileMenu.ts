import { useState } from "react";


const useMobileMenu = () => {
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<HTMLElement | null>();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMenuAnchorEl(event.currentTarget);
        setIsMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuAnchorEl(null);
        setIsMobileMenuOpen(false);
    }

    return {
        mobileMenuAnchorEl,
        isMobileMenuOpen,
        handleMobileMenuOpen,
        handleMobileMenuClose,
    }
}

export default useMobileMenu;