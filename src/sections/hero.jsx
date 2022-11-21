function Hero() {
	return (
		<section id="Hero" className="mt-3 container mx-auto sm:mt-18">
			<div className="grid xs:grid-rows-4 sm:grid-rows-4 md:grid-rows-5 lg:grid-rows-5 xl:grid-rows-5 xxl:grid-rows-5 grid-cols-3 grid-flow-col gap-4 mx-auto col-span-2 h-screen">
				<div className="row-span-4 sm:row-span-4 rounded-[15px] bg-[url('../media/hero/s1.jpg')] bg-[length:100%_100%] sec1 text-white bg-contain bg-no-repeat p-2 pl-5 w-full h-full col-span-2 sm:col-span-3 max-sm:col-span-3">
					{/* <img
						src={require("../media/hero/s1.jpg")}
						className="h-full"
						alt=""
					/> */}
					<p className="mt-[400px] text-4xl font-light">
						Title of vertical gallery
					</p>
					<p className="font-light text-white text-2xl opacity-50">
						Travel / August 21, 2017
					</p>
				</div>
				<div className="row-span-2 rounded-[15px] sec2 bg-[length:100%_100%] pl-2 hidden xs:hidden sm:hidden md:block lg:block xl:block xxl:block">
					{/* <img src={require("../media/hero/s2.jpg")} alt="" className="h-fit" /> */}
					<p className="text-white mt-[150px] text-4xl">
						The Sound Cloud you <br /> deserved is doomed
					</p>
					<p className="font-light text-white text-2xl opacity-50 mt-5">
						Travel / August 21, 2017
					</p>
				</div>
				<div className="row-span-2 rounded-[15px] sec3 bg-[length:100%_100%] xs:hidden sm:hidden md:block lg:block xl:block xxl:block hidden">
					{/* <img src={require("../media/hero/s2.jpg")} alt="" className="w-fit" /> */}
					<p className="text-white mt-[150px] text-4xl pl-2">
						The Sound Cloud you <br /> deserved is doomed
					</p>
					<p className="font-light text-white text-2xl opacity-50 mt-5">
						Travel / August 21, 2017
					</p>
				</div>
			</div>
		</section>
	);
}

export default Hero;
