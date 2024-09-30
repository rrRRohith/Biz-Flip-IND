export default function Invoice({ invoice }) {
    return (
        <>
            <style>
                {`
          @media print {
            /* Hide everything by default */
            body * {
              visibility: hidden;
            }
            
            /* Make only the print area visible */
            .invoiceContainer, .invoiceContainer * {
              visibility: visible;
            }
            .invoiceContainer {
              position: fixed;
              padding:40px 20px;
              left: 0;
              top: 0;
              width: 100%;
            }
          }
        `}
            </style>
            <div className="invoiceContainer">
                <div className="row align-items-top mb-5">
                    <div className="col-3 me-auto">
                        <img src="/logo.png" alt="..." />
                    </div>
                    <div className="col-9 ms-auto text-end">
                        <h1>INVOICE</h1>
                        <div>Date {invoice.invoice_date}</div>
                    </div>
                </div>
                <div className="my-5 row">
                    <div className="col-6">
                        <div className="font-bolder">BILL TO</div>
                        <div>{invoice.address.firstname} {invoice.address.lastname}</div>
                        {invoice.address.address ? (
                            <>
                                <div>{invoice.address.address}, {invoice.address.city}</div>
                                <div>{invoice.address.province}, {invoice.address.postalcode}</div>
                            </>
                        ) : (
                            <>
                                <div>{invoice.address.phone}</div>
                                <div>{invoice.address.email}</div>
                            </>
                        )}

                    </div>
                    <div className="col-6 text-end">
                        <div className="">Invoice no. <strong>#{invoice.invoice_no}</strong></div>
                        <div className="">Date. <strong>{invoice.invoice_date}</strong></div>
                        <div className="">Subscription tenure. <strong>{invoice.invoice_date}</strong> to <strong>{invoice.expire_date}</strong></div>
                    </div>
                </div>
                <div className="font-bolder">INVOICE SUMMERY</div>
                <div className="mb-5">
                    <table className="table w-full table-bordered">
                        <tr>
                            <th className="font-bold py-2 border-top-0">
                                Description
                            </th>
                            <th className="font-bold text-end py-2 border-top-0">
                                Price
                            </th>
                        </tr>
                        <tr>
                            <td className="py-2 border-bot">
                                {invoice.name}
                                <br />
                                {invoice.ads} ads | {window.formatPrice(invoice.price)}/ {invoice.duration} month
                            </td>
                            <td className="text-end py-2">
                                {window.formatPrice(invoice.price)}
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="text-end text-lg">
                    <div className="">Sub total. <strong>{window.formatPrice(invoice.price)}</strong></div>
                    <div className="">Tax amount. <strong>{window.formatPrice(invoice.tax_amount)}</strong></div>
                    <div className="">Grand total. <strong>{window.formatPrice(invoice.total_amount)}</strong></div>
                </div>
                <div className="my-5 small">
                    Thank you for your subscription! We appreciate your continued support and look forward to providing you with excellent service.
                </div>
            </div>
        </>
    );
}
