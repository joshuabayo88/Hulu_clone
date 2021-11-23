import {
	BadgeCheckIcon,
	CollectionIcon,
	HomeIcon,
	LightningBoltIcon,
	SearchIcon,
	UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link"
import HeaderItem from "./HeaderItem";

const Header = () => {
	return (
		<header className="flex flex-col sm:flex-row m-5 justify-between items-center">
			<div className="flex flex-grow justify-evenly max-w-2xl">
				<HeaderItem title="Home" Icon={HomeIcon} />
				<HeaderItem title="Trending" Icon={LightningBoltIcon} />
				<HeaderItem title="Verified" Icon={BadgeCheckIcon} />
				<HeaderItem title="Collections" Icon={CollectionIcon} />
				<HeaderItem title="Search" Icon={SearchIcon} />
				<HeaderItem title="Account" Icon={UserIcon} />
			</div>
			<Link href="localhost:3000">
			<Image
				className="object-contain cursor-pointer"
				src="https://links.papareact.com/ua6"
				width={200}
				height={100}
			/>
			</Link>
		</header>
	);
};

export default Header;
