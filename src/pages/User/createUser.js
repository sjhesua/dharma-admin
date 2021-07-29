import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
//Navigation
import Sidebar from '../../components/Navigation/Sidebar';
import Topbar from '../../components/Navigation/Topbar';
import PageHeading from '../../components/PageHeading';

class CreateUser extends Component {
    componentWillMount(){
        document.getElementById('body').className='bg-gradient-primary'
      }

    render() {
        return (
            <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">

          {/* <!-- Sidebar --> */}
          <Sidebar />
          {/* <!-- End of Sidebar --> */}

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              {/* <!-- Topbar --> */}
              <Topbar />
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}

                <PageHeading title="Usuarios" />

                {/* <!-- Content Row --> */}
                <div className="container-fluid">
            
                    <div className="pt-4 pb-3">
                
                        <h5 className="text-center mt-1 mb-4">Crear Nuevo Usuario</h5>
                
                        <form action="#!">
                
                            <div className="form-row">
                                <div className="col">
                                    <div className="md-form md-outline mt-0">
                                        <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                                        <label for="materialRegisterFormFirstName">First name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="md-form md-outline mt-0">
                                        <input type="email" id="materialRegisterFormLastName" className="form-control" />
                                        <label for="materialRegisterFormLastName">Last name</label>
                                    </div>
                                </div>
                            </div>
                
                            <div className="md-form md-outline mt-0">
                                <input type="email" id="defaultForm-email2" className="form-control" />
                                <label data-error="wrong" data-success="right" for="defaultForm-email2">Your email</label>
                            </div>
                            <div className="md-form md-outline mt-0">
                                <input type="password" id="defaultForm-pass2" className="form-control" />
                                <label data-error="wrong" data-success="right" for="defaultForm-pass2">Your password</label>
                                <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                    At least 8 characters and 1 digit
                                </small>
                            </div>
                
                            <div className="md-form md-outline">
                                <input type="number" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                                <label for="materialRegisterFormPhone">Phone number</label>
                                <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-3">
                                    Optional - for two step authentication
                                </small>
                            </div>
                
                        </form>
                
                    </div>
                
                    <div className="text-center mb-2">
                
                        <button type="submit" className="btn btn-primary mb-4">Crear Nuevo Usuario</button>
                
                    </div>
        
                </div>
              
              </div>
              {/* <!-- /.container-fluid --> */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Your Website 2019</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>  
      </div>
           
            
            
           
        )
    }
}

export default withRouter(CreateUser);