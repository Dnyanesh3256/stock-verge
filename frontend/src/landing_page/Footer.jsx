import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col mb-4">
            <img
              src="media/images/logoStockVerge.svg"
              alt="Logo"
              style={{ width: "50%", marginLeft: "-3%" }}
            />
            <p className="text-muted">
              &copy; 2025, Stock-Verge broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <div>
              <p>Company</p>
              <ul
                className="list-unstyled"
                style={{ fontSize: "16px", lineHeight: "35px" }}
              >
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Referral programme
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    StockVerge.tech
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    Press and media
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none text-muted">
                    StockVerge cares (CSR)
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <p>Support</p>
            <ul
              className="list-unstyled"
              style={{ fontSize: "16px", lineHeight: "35px" }}
            >
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Support portal
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  SV-Connect blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  List of charges
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <p>Account</p>
            <ul
              className="list-unstyled"
              style={{ fontSize: "16px", lineHeight: "35px" }}
            >
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Open an account
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  Fund transfer
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-muted">
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-muted" style={{ fontSize: "12px" }}>
          <p>
            StockVerge Broking Ltd.: Member of NSE, BSE & MCX – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through StockVerge Broking Ltd. – SEBI Registration no.:
            IN-DP-431-2019 Commodity Trading through StockVerge Commodities Pvt.
            Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered
            Address: StockVerge Broking Ltd., #153/154, 4th Cross, Dollars
            Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru
            - 560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to complaints@stockverge.com, for DP
            related to dp@stockverge.com. Please ensure you carefully read the
            Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks, read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary. "Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of StockVerge and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
