import { ReactNode } from "react";

interface FrameInput {
    children: ReactNode
}
export default function Frame(props: FrameInput) {
    return <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                {props.children}
            </div>
            <div className="col-md-3">
                <div>
                    <div className="bg-white fs-3 rounded shadow-sm p-2 my-3 text-center">
                        about <span className="text-primary">block<span className="fw-bold">dont</span></span>
                    </div>
                    <a className="d-block text-center" href="https://github.com/Arikato111/blockdont-next" target={"_blank"} rel="noreferrer">
                        <div className="bg-white rounded shadow-sm p-1 mb-3 text-center d-inline-block">
                            <img style={{ width: "32px" }} src="https://github.com/Arikato111/Arikato111/raw/main/icons/github-original.svg" alt="" />
                            <span className="mx-3">Source code</span>
                        </div>
                    </a>
                    <div className="text-secondary">
                        <a className="text-secondary" href="https://github.com/Arikato111">Nawasan Wisitsingkhon</a>- <a className="text-secondary" href="mailto:0946543626sek@email.com">Sitthiphon phala</a>- <a className="text-secondary" href="mailto:jakkrapat16@gmail.com">Jakkrapat Chaiyaserk</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}