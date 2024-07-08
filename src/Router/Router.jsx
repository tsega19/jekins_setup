import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from '../pages/Main'
const Routers = () => {

    return (
        <Router>
            <Routes>
                <Route path="/:sessionId" element={<Main />} />
                {/* <Route path="/success" element={<Success />} /> */}
                <Route
                    path="*"
                    element={
                        <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
                            <div className="container flex flex-col items-center ">
                                <div className="flex flex-col gap-6 max-w-md text-center">
                                    <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
                                        <span className="sr-only text-secondary">Error</span>404
                                    </h2>
                                    <p className="text-xl md:text-xl dark:text-gray-300">
                                        Sorry, we couldn't find this page.
                                    </p>
                                    <a
                                        href="/"
                                        className="px-8 py-2 text-xl font-semibold rounded bg-primary text-gray-50 hover:text-gray-200"
                                    >
                                        Back to home
                                    </a>
                                </div>
                            </div>
                        </section>
                    }
                />
            </Routes>
        </Router>
    )
}

export default Routers