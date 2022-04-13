import React from 'react';

const EmailSubmit = () => {
    return ( 

        <section className="email py-5 wow zoomIn" data-wow-delay="1.4s">
        <div className="container">

            <div className="row">
            <div className="col-lg-12">
              <div className="title-all text-center">
                <h1>عضویت در خبرنامه</h1>
              </div>
            </div>
                <div className="col-md-9 mx-auto">
                    <form>
                        <div className="form-group row">
                            <label for="inputname" className="col-lg-3 col-form-label">نام و نام خانوادگی</label>
                            <div className="col-lg-9">
                                <input type="text" className="form-control" id="inputname" placeholder="نام و نام خانوادگی"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputcontact" className="col-lg-3 col-form-label">شماره تماس</label>
                            <div className="col-lg-9">
                                <input type="text" className="form-control" id="inputcontact" placeholder="شماره تماس"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputemail" className="col-lg-3 col-form-label">آدرس ایمیل</label>
                            <div className="col-lg-9">
                                <input type="text" className="form-control" id="inputemail" placeholder="آدرس ایمیل"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-lg-9 mr-auto">
                                <button type="submit" className="btn btn-block btn-theme">ارسال</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default EmailSubmit;