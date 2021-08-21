import Link from "next/link"
import { Button } from "@material-ui/core"

export const NavBar = () => {
    return (
        <div className="nav-bar-ui-component">
            <Link href="/" passHref>
                <Button>Corona</Button>
            </Link>
        </div>
    )
}