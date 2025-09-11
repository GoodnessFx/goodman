import * as React from "react";

function Textarea({ className = "", ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={`textarea ${className}`.trim()}
      {...props}
    />
  );
}

export { Textarea };
