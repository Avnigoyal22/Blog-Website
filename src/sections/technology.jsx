import Clap from "../media/technology/rythm.svg";
import Share from "../media/technology/share.svg";

function Technology() {
	return (
		<section id="Technology" className="mt-16">
			<div className="container mx-auto z-0">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 mx-16 sm:mx-16 md:mx-16 lg:mx-0 xl:mx-0 xxl:mx-0">
					<div className="">
						<div className="grid grid-cols-3 overflow-hidden">
							<div></div>
							<div></div>
							<div className="grid grid-cols-2 fixed gap-x-8">
								<div className="flex flex-row-reverse">
									<img src={Clap} alt="" className="text-right" />
								</div>
								<div className="text-right">9.3K</div>
								<div className="flex flex-row-reverse">
									<img src={Share} alt="" className="h-fit" />
								</div>
								<div className="text-right">Share this article</div>
							</div>
						</div>
					</div>

					<div className="mainCont">
						<div className="techHead text-2xl">
							5 Ways to animate a React app.
						</div>
						<div className="grid grid-cols-5 mt-4">
							<div className="userImgDiv">
								<img
									src={require("../media/technology/user.png")}
									alt=""
									className="userImg"
								/>
							</div>
							<div className="max-sm:col-span-4 max-md:col-span-2 max-lg:col-span-2 max-xl:col-span-2 max-xxl:col-span-2 max-col-span-4">
								<p className="userName">Dimitry Nozhenko</p>
								<p className="subText opacity-50">Jan 28, 2019 . 10 min read</p>
							</div>
							<div className="max-sm:order-first max-lg:order-last max-xl:order-last max-xxl:order-last order-first max-sm:col-span-5 max-lg:col-span-2 max-xl:col-span-2 max-xxl:col-span-2 col-span-5">
								<i class="fa-brands fa-facebook-f opacity-50 bg-neutral-400 p-1 rounded text-white"></i>

								<i class="fa-brands fa-twitter opacity-50 bg-neutral-400 p-1 rounded text-white ml-2"></i>

								<i class="fa-brands fa-instagram opacity-50 bg-neutral-400 p-1 rounded text-white ml-2"></i>

								<i class="fa-brands fa-youtube opacity-50 bg-neutral-400 p-1 rounded text-white ml-2"></i>
							</div>
						</div>
						<img
							src={require("../media/technology/reactImg.png")}
							alt=""
							className="reactImg w-full mt-4"
						/>

						<p className="animationMessage mt-4">
							Animation in ReactJs app is a popular topic and there are many
							ways to create different types of animations. Many developers
							create animations using CSS and adding classes to HTML tags. This
							is a gateway and you should use it. If you want to create complex
							animations you can pay attention to GreenSock. GreenSock is the
							most powerful animation platform. There are also a lot of
							libraries, components for creating animations in React. <br />
							<br />
							Let's talk about them.
						</p>

						<img
							src={require("../media/technology/codeImg.png")}
							alt=""
							className="codeImg mt-2 w-full"
						/>

						<div className="grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-5 xxl:grid-cols-6 grid-cols-3 gap-1">
							<div className="labels p-1 rounded bg-neutral-500 text-center text-white text-[8px]">
								React
							</div>
							<div className="labels p-1 rounded bg-neutral-500 text-center text-white text-[8px]">
								Javascript
							</div>
							<div className="labels p-1 rounded text-center bg-neutral-500 text-white text-[8px]">
								Animations
							</div>
						</div>
					</div>
					<div></div>
				</div>
			</div>

			<div className="bg-neutral-100 p-16 z-10">
				<div className="container mx-auto">
					More from The Siren
					<br />
					<br />
					<hr />
					<div className="grid grid-cols-3 mt-8 gap-8">
						<div className="sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
							<p className="opacity-50 text-[12px] hidden sm:hidden md:hidden lg:block xl:block xxl:block">
								Also tagged ReactJs
							</p>

							<div className="grid grid-cols-3">
								<div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<img
										src={require("../media/hero/s1.jpg")}
										alt=""
										className="mt-4"
									/>
								</div>
								<div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<p className="text-1xl mt-4 sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl">
										Joshua Tree Overnight Adventure
									</p>
								</div>
							</div>

							<div className="hidden grid-cols-5 mt-4 gap-2 sm:hidden md:hidden lg:grid xl:grid xxl:grid">
								<div className="userImgDiv">
									<img
										src={require("../media/technology/user.png")}
										alt=""
										className="userImg"
									/>
								</div>
								<div className="col-span-4">
									<p className="userName">Dimitry Nozhenko</p>
									<p className="subText opacity-50">
										Jan 28, 2019 . 10 min read
									</p>
								</div>
							</div>
						</div>

						<div className="sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
							<p className="opacity-50 text-[12px] hidden sm:hidden md:hidden lg:block xl:block xxl:block">
								Also tagged ReactJs
							</p>

							<div className="grid grid-cols-3">
								<div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<img
										src={require("../media/hero/s1.jpg")}
										alt=""
										className="mt-4"
									/>
								</div>
								<div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<p className="text-1xl mt-4 sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl">
										Joshua Tree Overnight Adventure
									</p>
								</div>
							</div>

							<div className="hidden grid-cols-5 mt-4 gap-2 sm:hidden md:hidden lg:grid xl:grid xxl:grid">
								<div className="userImgDiv">
									<img
										src={require("../media/technology/user.png")}
										alt=""
										className="userImg"
									/>
								</div>
								<div className="col-span-4">
									<p className="userName">Dimitry Nozhenko</p>
									<p className="subText opacity-50">
										Jan 28, 2019 . 10 min read
									</p>
								</div>
							</div>
						</div>

						<div className="sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 xxl:col-span-1 col-span-3">
							<p className="opacity-50 text-[12px] hidden sm:hidden md:hidden lg:block xl:block xxl:block">
								Also tagged ReactJs
							</p>
							<div className="grid grid-cols-3">
								<div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<img
										src={require("../media/hero/s1.jpg")}
										alt=""
										className="mt-4"
									/>
								</div>
								<div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-3 xl:col-span-3 xxl:col-span-3">
									<p className="text-1xl mt-4 sm:text-1xl md:text-3xl lg:text-4xl xl:text-4xl xxl:text-4xl">
										Joshua Tree Overnight Adventure
									</p>
								</div>
							</div>

							<div className="hidden grid-cols-5 mt-4 gap-2 sm:hidden md:hidden lg:grid xl:grid xxl:grid">
								<div className="userImgDiv">
									<img
										src={require("../media/technology/user.png")}
										alt=""
										className="userImg"
									/>
								</div>
								<div className="col-span-4">
									<p className="userName">Dimitry Nozhenko</p>
									<p className="subText opacity-50">
										Jan 28, 2019 . 10 min read
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Technology;
