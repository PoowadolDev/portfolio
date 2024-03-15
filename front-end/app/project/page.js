export default function Project() {
    return (
        <section className="overflow-auto font-mono">
            <div className="grid mt-40 mb-40">
                <div className="flex justify-center mb-10">
                    <div className="grid">
                        <h1 className="text-3xl flex justify-center">My Own <p className="font-bold text-sky-400/100"> Project</p></h1>
                        <p className="">Here are a few Project I have been working on</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="rounded-xl w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Web Application Order Food</h2>
                                <p className="text-justify">This project is a web application designed to facilitate online food ordering. Built using Python's Flask framework for the back-end, it offers a user-friendly interface for customers to browse menus, place orders, and manage their food delivery experience. The front-end is implemented using JavaScript.</p>
                            </div>
                        </div>
                        <div className="rounded-xl w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Real-time Web Chat</h2>
                                <p className="text-justify">This project is a web-based chat application that enables real-time communication between users. It leverages Python's websockets library to establish persistent connections between clients and the server, facilitating instant message exchange.</p>
                            </div>
                        </div>
                        <div className="rounded-xl w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Web-based Todo List with Golang and Next.js</h2>
                                <p className="text-justify">This project is a web application for managing to-do lists, built to practice and solidify my skills in Golang and Next.js.</p>
                            </div>
                        </div>
                        <div className="rounded-xl w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cryptocurrency Price Prediction Web App</h2>
                                <p className="text-justify">This project is a web application designed to leverage machine learning for cryptocurrency price prediction. Built using Python, it allows users to analyze historical data and potentially forecast future trends in cryptocurrency prices.</p>

                            </div>
                        </div>
                        <div className="rounded-xl w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Web Application for Route Optimization</h2>
                                <p className="text-justify">This project is a web application designed to optimize delivery routes using a Genetic Algorithm. Built with Python's Flask framework for the back-end and JavaScript for the front-end, it allows users to define delivery locations and calculates the most efficient route for achieving their goals.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}