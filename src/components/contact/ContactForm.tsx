'use client';

import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = (nextValues: FormValues) => {
    const nextErrors: FormErrors = {};

    if (!nextValues.name.trim()) {
      nextErrors.name = 'Vui lòng nhập họ tên.';
    }

    if (!nextValues.email.trim()) {
      nextErrors.email = 'Vui lòng nhập email.';
    } else if (!emailPattern.test(nextValues.email)) {
      nextErrors.email = 'Email không đúng định dạng.';
    }

    if (!nextValues.subject.trim()) {
      nextErrors.subject = 'Vui lòng nhập tiêu đề.';
    }

    if (!nextValues.message.trim()) {
      nextErrors.message = 'Vui lòng nhập nội dung tin nhắn.';
    }

    return nextErrors;
  };

  const handleChange =
    (field: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const nextValues = { ...values, [field]: event.target.value };
      setValues(nextValues);
      setSuccessMessage('');

      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }));
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSuccessMessage('');

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSuccessMessage('Tin nhắn của bạn đã được gửi thành công!');
    setValues(initialValues);
  };

  const inputClassName = (field: keyof FormValues) =>
    `w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-dark outline-none transition-colors placeholder:text-gray-400 focus:border-primary ${
      errors[field] ? 'border-red-400' : 'border-border-light'
    }`;

  return (
    <section className="rounded-[20px] border border-border-light bg-white p-6 shadow-[0_18px_50px_rgba(26,26,26,0.06)] md:p-8 lg:p-10">
      <h1 className="text-3xl font-extrabold tracking-tight text-dark">Just Say Hello!</h1>
      <p className="mt-3 max-w-[720px] text-base leading-7 text-gray-text">
        Bạn có câu hỏi hoặc muốn hợp tác với FreshFoodStore? Hãy gửi tin nhắn cho
        chúng tôi.
      </p>

      <form className="mt-8" noValidate onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange('name')}
              placeholder="Họ và tên"
              className={inputClassName('name')}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? <p className="mt-2 text-sm text-red-500">{errors.name}</p> : null}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange('email')}
              placeholder="Email"
              className={inputClassName('email')}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? <p className="mt-2 text-sm text-red-500">{errors.email}</p> : null}
          </div>
        </div>

        <div className="mt-5">
          <input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange('subject')}
            placeholder="Tiêu đề"
            className={inputClassName('subject')}
            aria-invalid={Boolean(errors.subject)}
          />
          {errors.subject ? <p className="mt-2 text-sm text-red-500">{errors.subject}</p> : null}
        </div>

        <div className="mt-5">
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange('message')}
            placeholder="Tin nhắn"
            rows={7}
            className={`${inputClassName('message')} resize-none`}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <p className="mt-2 text-sm text-red-500">{errors.message}</p> : null}
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Send Message
          </button>

          {successMessage ? (
            <p className="text-sm font-medium text-primary" aria-live="polite">
              {successMessage}
            </p>
          ) : null}
        </div>
      </form>
    </section>
  );
}
