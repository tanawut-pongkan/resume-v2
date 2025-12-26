import React from 'react';
import { Copy } from 'lucide-react';
import { useToast } from './Toast';

interface CopyButtonProps {
  label: string;
  value: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ label, value }) => {
  const { notify } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      notify(`${label} copied to clipboard`);
    } catch (error) {
      notify('Unable to copy. Please copy manually.');
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-slate-700 dark:text-slate-200"
    >
      <Copy className="h-4 w-4" aria-hidden />
      Copy {label}
    </button>
  );
};

export default CopyButton;
