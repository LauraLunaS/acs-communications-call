import { Container }  from './style';
import Image from 'next/image';

const NavBar = () => {
    return (
        <Container>
            <Image
            src={"/assets/aicury-logo.png"}
            alt={"LOGO"}
            width={121}
            height={71}
            priority
            />
        </Container>
    )
}

export default NavBar;