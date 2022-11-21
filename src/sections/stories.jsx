function Stories() {
	return (
		<section id="Stories" className="container mx-auto mt-20 mb-12">
			<div className="titleLatest">
				<p className="theLatest text-4xl">The Latest</p>
				<div className="latestBar h-[2px] w-[100px] bg-orange-600"></div>
			</div>
			<div className="cardsLatest mt-8">
				<div className="grid grid-cols-3 gap-5">
					<div className="card1 p-3 border-r-2 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Catch waves with an adventure guide
							</div>
							<div className="contentText text-base mt-12">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								TECH / <span className="opacity-50">August 2021, </span>{" "}
							</p>
						</div>
					</div>

					<div className="card1 p-3 border-r-2 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Catch waves with an adventure guide
							</div>
							<div className="contentText text-base mt-12">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								TECH / <span className="opacity-50">August 2021, </span>{" "}
							</p>
						</div>
					</div>

					<div className="card1 p-3 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
						<div className="card1Text ml-5 mt-5">
							<div className="headerText text-3xl">
								Catch waves with an adventure guide
							</div>
							<div className="contentText text-base mt-12">
								Gujrat is vastly underrated and it's a mystery to us why the
								region isn't more well-known as a tourist destnation. It has a
								plethora of temples and places.
							</div>
						</div>
						<div className="card1SubText mt-8 ml-3">
							<p className="subText">
								TECH / <span className="opacity-50">August 2021, </span>{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr align="center" className="mt-8 text-black" />
			<p className="mt-8">VIEW MORE</p>
		</section>
	);
}

export default Stories;
