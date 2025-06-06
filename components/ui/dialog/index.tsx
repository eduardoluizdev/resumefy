import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  Dialog as DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./primitive";

export type BaseDialogProps = {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

type DialogProps = BaseDialogProps & {
  title: string;
  description?: string;
  content: React.ReactNode;
};

export const Dialog = ({
  title,
  description,
  content,
  children,
  open,
  setOpen,
}: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {content}
      </DialogContent>
    </DialogRoot>
  );
};
