type FormFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

export function FormField({
  label,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "4px",
        }}
      >
        <label>{label}</label>

        {required && (
          <span
            style={{
              backgroundColor: "red",
              color: "white",
              fontSize: "12px",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            必須
          </span>
        )}
      </div>

      {children}
    </div>
  );
}