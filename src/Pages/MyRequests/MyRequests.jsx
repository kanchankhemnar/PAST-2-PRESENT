import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Footer from "../../Components/Footer/Footer";

const MyRequests = () => {
  return (
    <>
      <div >
        <div style={{display:"flex",backgroundColor:"white"}}>
        <div style={{width:"100%",height:"100%",marginTop:"150px",marginLeft:"400px"}}>
          <div
            className="modal modal-sheet position-static d-block  p-5 py-md-5 "
            tabindex="-1"
            role="dialog"
           
          >
            <div className="modal-dialog shadow" role="document">
              <div className="modal-content rounded-4 shadow">
                <div className="modal-header border-bottom-0">
                  <h1 className="modal-title fs-5">REQUEST</h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body py-0">
                  <p>Request Item</p>
                </div>
                <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
                  <button type="button" className="btn btn-lg btn-primary">
                    Make changes
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Delete Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "30%" }}>
          <Sidebar />
        </div>
        </div>
        <div>

        <Footer />
        </div>
      </div>
    </>
  );
};
export default MyRequests;
