import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Index() {
    return (
        <div>
            <ResponsiveNavLink>SISTEMA LARAVEL + REACT</ResponsiveNavLink>
            <div>
                <h1>Ola novo sistema!</h1>
                <br />
                <PrimaryButton>
                    <Link href={route("Cliente.Cadastro")}>
                        Cadastro de Funcionarios
                    </Link>
                </PrimaryButton>
            </div>
        </div>
    );
}
