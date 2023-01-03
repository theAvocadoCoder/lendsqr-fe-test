interface SidebarData {
  customers: {
      icon: string;
      title: string;
      link: string;
  }[];
  business: {
      icon: string;
      title: string;
      link: string;
  }[];
  settings: {
      icon: string;
      title: string;
      link: string;
  }[];
}

const sidebarData: SidebarData = {
  customers: [
    {
      icon: "users",
      title: "Users",
      link: "/users",
    },
    {
      icon: "guarantors",
      title: "Guarantors",
      link: "/guarantors",
    },
    {
      icon: "loans",
      title: "Loans",
      link: "/loans",
    },
    {
      icon: "decision_models",
      title: "Decision Models",
      link: "/decision_models",
    },
    {
      icon: "savings",
      title: "Savings",
      link: "/savings",
    },
    {
      icon: "loan_requests",
      title: "Loan Requests",
      link: "/loan_requests",
    },
    {
      icon: "whitelist",
      title: "Whitelist",
      link: "/whitelist",
    },
    {
      icon: "karma",
      title: "Karma",
      link: "/karma",
    },
  ],
  business: [
    {
      icon: "organization",
      title: "Organization",
      link: "/organization",
    },
    {
      icon: "loan_products",
      title: "Loan Products",
      link: "/loan_products",
    },
    {
      icon: "savings_products",
      title: "Savings Products",
      link: "/savings_products",
    },
    {
      icon: "fees_and_charges",
      title: "Fees and Charges",
      link: "/fees_and_charges",
    },
    {
      icon: "transactions",
      title: "Transactions",
      link: "/transactions",
    },
    {
      icon: "services",
      title: "Services",
      link: "/services",
    },
    {
      icon: "service_account",
      title: "Service Account",
      link: "/service_account",
    },
    {
      icon: "settlements",
      title: "Settlements",
      link: "/settlements",
    },
    {
      icon: "reports",
      title: "Reports",
      link: "/reports",
    },
  ],
  settings: [
    {
      icon: "preferences",
      title: "Preferences",
      link: "/preferences",
    },
    {
      icon: "fees_and_pricing",
      title: "Fees and Pricing",
      link: "/fees_and_pricing",
    },
    {
      icon: "audit_logs",
      title: "Audit Logs",
      link: "/audit_logs",
    },
  ],
}

export default sidebarData;