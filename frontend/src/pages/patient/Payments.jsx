import {
  CreditCard,
  Receipt,
  Download,
  CheckCircle2,
  Wallet,
  Smartphone,
  Banknote,
  ShieldCheck,
} from "lucide-react";

const payments = [
  {
    id: "INV-2026-0918",
    title: "Cardiology Consultation",
    hospital: "CityCare Hospital",
    date: "18 Sep 2026",
    amount: "₹1,200",
    status: "Paid",
    method: "UPI",
  },
  {
    id: "INV-2026-0912",
    title: "Complete Blood Count",
    hospital: "CityCare Diagnostics",
    date: "12 Sep 2026",
    amount: "₹650",
    status: "Paid",
    method: "Cash",
  },
  {
    id: "INV-2026-0905",
    title: "Chest X-Ray",
    hospital: "CityCare Hospital",
    date: "05 Sep 2026",
    amount: "₹900",
    status: "Paid",
    method: "Card",
  },
  {
    id: "INV-2026-0902",
    title: "Follow-up Consultation",
    hospital: "CityCare Hospital",
    date: "02 Sep 2026",
    amount: "₹1,200",
    status: "Paid",
    method: "Online",
  },
];

const paymentMethods = [
  {
    title: "Cash",
    description: "Pay directly at the hospital reception.",
    icon: Banknote,
  },
  {
    title: "UPI",
    description: "Pay using your preferred UPI app.",
    icon: Smartphone,
  },
  {
    title: "Card",
    description: "Pay using debit or credit card.",
    icon: CreditCard,
  },
  {
    title: "Online",
    description: "Secure online payment through Carely.",
    icon: Wallet,
  },
];

function Payments() {
  const totalPaid = 3950;
  const pendingAmount = 0;

  return (
    <div className="patient-dashboard payments-page">

      {/* Header */}
      <div className="payments-header">
        <div>
          <span className="section-eyebrow">
            BILLING & PAYMENTS
          </span>

          <h1>Payments</h1>

          <p>
            Manage your healthcare payments, invoices and receipts
            securely in one place.
          </p>
        </div>
      </div>

      {/* Payment Summary */}
      <section className="payment-summary">

        <div className="payment-summary-card">
          <div className="payment-summary-icon">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <span>Total Paid</span>
            <strong>
              ₹{totalPaid.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        <div className="payment-summary-card">
          <div className="payment-summary-icon">
            <Wallet size={21} />
          </div>

          <div>
            <span>Pending</span>
            <strong>
              ₹{pendingAmount.toLocaleString("en-IN")}
            </strong>
          </div>
        </div>

        <div className="payment-summary-card">
          <div className="payment-summary-icon">
            <Receipt size={21} />
          </div>

          <div>
            <span>Paid Invoices</span>
            <strong>{payments.length}</strong>
          </div>
        </div>

      </section>

      {/* Payment Status */}
      <section className="payment-status-card">

        <div className="payment-status-icon">
          <CheckCircle2 size={24} />
        </div>

        <div>
          <strong>All payments are up to date</strong>

          <p>
            You currently have no outstanding healthcare payments.
          </p>
        </div>

        <span className="payment-clear-badge">
          No dues
        </span>

      </section>

      {/* Payment Methods */}
      <section className="dashboard-panel payment-methods-panel">

        <div className="panel-header">
          <div>
            <h2>Payment Methods</h2>

            <p>
              Choose how you want to pay your healthcare bills.
            </p>
          </div>
        </div>

        <div className="payment-methods-grid">

          {paymentMethods.map((method) => {
            const Icon = method.icon;

            return (
              <button
                className="payment-method-card"
                key={method.title}
              >
                <div className="payment-method-icon">
                  <Icon size={21} />
                </div>

                <div>
                  <strong>{method.title}</strong>

                  <p>{method.description}</p>
                </div>
              </button>
            );
          })}

        </div>

      </section>

      {/* Cash Payment Information */}
      <section className="cash-payment-info">

        <div className="cash-payment-icon">
          <Banknote size={21} />
        </div>

        <div>
          <strong>Pay with cash at the hospital</strong>

          <p>
            Cash payments can be made at the hospital reception.
            Authorized hospital staff will record the payment against
            your invoice and issue a receipt.
          </p>
        </div>

      </section>

      {/* Payment History */}
      <section className="dashboard-panel payment-history-panel">

        <div className="panel-header">
          <div>
            <h2>Payment History</h2>

            <p>
              Your recent invoices and completed payments.
            </p>
          </div>

          <span className="payment-history-count">
            {payments.length} Transactions
          </span>
        </div>

        <div className="payment-list">

          {payments.map((payment) => (
            <div
              className="payment-item"
              key={payment.id}
            >

              <div className="payment-icon">
                <Receipt size={20} />
              </div>

              <div className="payment-info">

                <div className="payment-title-row">
                  <h3>{payment.title}</h3>

                  <span className="payment-paid-badge">
                    <CheckCircle2 size={12} />
                    Paid
                  </span>
                </div>

                <p>{payment.hospital}</p>

                <div className="payment-meta">
                  <span>{payment.id}</span>
                  <span>•</span>
                  <span>{payment.date}</span>
                  <span>•</span>
                  <span>{payment.method}</span>
                </div>

              </div>

              <div className="payment-amount">

                <strong>{payment.amount}</strong>

                <button title="Download receipt">
                  <Download size={16} />
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Security */}
      <section className="payment-security">

        <div className="payment-security-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <strong>Secure payment records</strong>

          <p>
            Every payment is linked to an invoice and recorded with
            its payment method and transaction details.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Payments;