import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode;
};

export const Layout = ({ children }: ILayoutProps) => (
    <div className="layout__layoutOuterWrapper">
        <div className="layout__layoutWrapper">
            {children}
        </div>
    </div>
);