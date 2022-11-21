import "../App.css";

function Header() {
	return (
		<header
			id="Header"
			className="mt-0 xxl:mt-8 xl:mt-8 md:mt-8 sm:mt-0 z-10 xs:fixed max-sm:fixed xl:relative xxl:relative relative"
		>
			<div className="text-center hidden justify-center w-full sm:hidden md:flex xl:flex xxl:flex">
				<img src={require("../media/logo/logo.png")} alt="" className="h-20" />
			</div>

			<nav
				id="Nav"
				className="hidden sm:hidden md:block lg:block xl:block xxl:block"
			>
				<div className="grid grid-cols-12 container mx-auto">
					{/* div className="col-span-1"></div> */}
					<div className="col-span-2 text-center">
						<a href="/">Home</a>
					</div>

					<div className="col-span-2 text-center">
						<a href="/bollywood">Bollywood</a>
					</div>

					<div className="col-span-2 text-center">
						<a href="/technology">Technology</a>
					</div>

					<div className="col-span-2 text-center">Hollywood</div>

					<div className="col-span-2 text-center">Fitness</div>

					<div className="col-span-2 text-center">Food</div>
				</div>
			</nav>
			<hr
				className="mx-[50px] mt-10px hidden sm:hidden md:block lg:block xl:block xxl:block"
				color="#000"
			/>

			<nav
				id="NavPhone"
				className="sm:block md:hidden lg:hidden xl:hidden xxl:hidden block mx-auto contianer shadow-xl bg-white"
			>
				<div className="grid grid-cols-3">
					<div className="logoDiv">
						<img src={require("../media/logo/logo.png")} alt="" />
					</div>
					<div></div>
					<div className="touch flex items-center justify-center text-center">
						<a href=""></a>
						<i class="fa-solid fa-bars mr-12 text-4xl"></i>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
