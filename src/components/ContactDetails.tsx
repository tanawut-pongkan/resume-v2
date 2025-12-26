import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { ResumeData } from '../data/types';
import CopyButton from './CopyButton';

interface ContactDetailsProps {
  data: ResumeData;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ data }) => {
  const { basics } = data;
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="card card-hover flex items-start gap-3">
        <div className="rounded-xl bg-accent/10 p-3 text-accent">
          <MapPin className="h-5 w-5" aria-hidden />
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
          <p className="text-sm text-slate-600 dark:text-slate-300">{basics.location}</p>
        </div>
      </div>
      <div className="card card-hover flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-accent/10 p-3 text-accent">
            <Mail className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{basics.email}</p>
          </div>
        </div>
        <CopyButton label="email" value={basics.email} />
      </div>
      <div className="card card-hover flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-xl bg-accent/10 p-3 text-accent">
            <Phone className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 dark:text-white">Phone</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{basics.phone}</p>
          </div>
        </div>
        <CopyButton label="phone" value={basics.phone} />
      </div>
    </div>
  );
};

export default ContactDetails;
