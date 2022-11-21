function Latest() {
	return (
		<section id="Latest" className="container mx-auto">
			<div className="titleLatest">
				<p className="theLatest text-4xl">The Latest</p>
				<div className="latestBar h-[2px] w-[100px] bg-orange-600"></div>
			</div>

			<div className="cardsLatest mt-8">
				<div className="grid grid-cols-3 gap-5">
					<div className="card1 shadow-xl p-3 max-sm:col-span-3 max-md:col-span-1 max-lg:col-span-1 max-xl:col-span-1 max-xxl:col-span-1 col-span-1">
						<div className="img1Latest">
							<img
								src={require("../media/hero/s1.jpg")}
								alt=""
								className="rounded-[10px]"
							/>
						</div>
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Joshua Tree <br /> Overnight Adventure
							</div>
							<div className="contentText">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								Travel / <span className="opacity-50">August 2021, </span>{" "}
							</p>
						</div>
					</div>

					<div className="card1 shadow-xl p-3  max-sm:col-span-3 max-md:col-span-1 max-lg:col-span-1 max-xl:col-span-1 max-xxl:col-span-1 col-span-1">
						<div className="img1Latest">
							<img
								src={require("../media/hero/s1.jpg")}
								alt=""
								className="rounded-[10px]"
							/>
						</div>
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Joshua Tree <br /> Overnight Adventure
							</div>
							<div className="contentText">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								Travel / <span className="opacity-50">August 2021, </span>
							</p>
						</div>
					</div>

					<div className="card1 shadow-xl p-3 max-sm:col-span-3 max-md:col-span-1 max-lg:col-span-1 max-xl:col-span-1 max-xxl:col-span-1 col-span-1">
						<div className="img1Latest">
							<img
								src={require("../media/hero/s1.jpg")}
								alt=""
								className="rounded-[10px]"
							/>
						</div>
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Joshua Tree <br /> Overnight Adventure
							</div>
							<div className="contentText">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								Travel / <span className="opacity-50">August 2021, </span>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Latest;
