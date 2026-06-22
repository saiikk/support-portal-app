type DetailRowProps = {
  label: string;
  children: React.ReactNode;
  isStyled?: boolean;
};

export function InquiryDetailRow({
  label,
  children,
  isStyled = true,
}: DetailRowProps) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <h2
        style={{
          color: "#000",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {label}
      </h2>
      {isStyled ? (
        <p
          style={{
            width: "100%",
            height: "36px",
            backgroundColor: "#ececec",
            lineHeight: "36px",
          }}
        >
          {children}
        </p>
      ) : (
        children
      )}
    </div>
  );
}
