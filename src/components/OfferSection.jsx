
const OfferSection = () => {
    return (
        <section className="relative ">

            {/*  light background */}
            <div className=" bg-white h-72" />

            {/*  dark background */}
            <div className="bg-grey-700 h-52" />

            {/* Floating Card */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-4">
                <div className="my-13.75 bg-gray-50 rounded-2xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">

                    <div>
                        <img src="./icon.svg" alt="pricing" className="mb-4 w-12 md:w-[76px] h-auto" />

                        <h2 className="text-[36px] md:text-[46px] font-semibold text-gray-900">
                            Superpowers starting $9.99/month.
                            <br />
                            Free for 7 days.
                        </h2>

                        <div className="mt-8 flex flex-col md:flex-row gap-4">
                            <button className="bg-gray-900 text-white px-6 py-3 rounded-md">
                                Get started now
                            </button>

                            <button className="border border-gray-300 px-6 py-3 rounded-md text-gray-700">
                                More about Setapp
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default OfferSection
