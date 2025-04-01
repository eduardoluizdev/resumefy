import {
  FormControl,
  FormField as FormFieldPrimitive,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {
  Control,
  ControllerRenderProps,
  useFormContext,
} from "react-hook-form";
import { Input } from ".";

type FormFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  htmlFor?: string;
  className?: string;
  control?: Control<any, any>;
  children?: (params: { field: ControllerRenderProps<any, any> }) => ReactNode;
};

export const FormField = ({
  name,
  label,
  required,
  htmlFor,
  className,
  control: customControl,
  children,
  ...props
}: FormFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];

  return (
    <FormFieldPrimitive
      control={customControl ?? control}
      name={name}
      rules={{
        required: required && "Campo obrigatório",
      }}
      render={({ field }) => (
        <FormItem className={cn("", className)}>
          <FormLabel
            htmlFor={htmlFor}
            className={cn(hasError && "text-red-600")}
          >
            {label}
          </FormLabel>
          <FormControl>
            {children ? (
              children({ field })
            ) : (
              <Input {...field} {...props} id={htmlFor} />
            )}
          </FormControl>
          <FormMessage className="text-red-600" />
        </FormItem>
      )}
    />
  );
};
