'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import { useCart } from '@/context/CartContext';

type PaymentMethod = 'cod' | 'paypal' | 'bank_qr' | 'momo';

interface CheckoutErrors {
  firstName?: string;
  lastName?: string;
  address?: string;
  country?: string;
  state?: string;
  zipCode?: string;
  email?: string;
  phone?: string;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export default function CheckoutPageContent() {
  const { cartTotal, items } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('vi');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shipDifferentAddress, setShipDifferentAddress] = useState(false);
  const [orderNotes, setOrderNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [errors, setErrors] = useState<CheckoutErrors>({});
  const [successMessage, setSuccessMessage] = useState('');

  const totalQuantity = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items],
  );

  const validate = () => {
    const nextErrors: CheckoutErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName.trim()) nextErrors.firstName = 'Vui lòng nhập tên.';
    if (!lastName.trim()) nextErrors.lastName = 'Vui lòng nhập họ.';
    if (!address.trim()) nextErrors.address = 'Vui lòng nhập địa chỉ giao hàng.';
    if (!country) nextErrors.country = 'Vui lòng chọn quốc gia.';
    if (!state) nextErrors.state = 'Vui lòng chọn tỉnh/thành.';
    if (!zipCode.trim()) nextErrors.zipCode = 'Vui lòng nhập mã bưu điện.';
    if (!email.trim()) {
      nextErrors.email = 'Vui lòng nhập email.';
    } else if (!emailRegex.test(email)) {
      nextErrors.email = 'Email chưa đúng định dạng.';
    }
    if (!phone.trim()) nextErrors.phone = 'Vui lòng nhập số điện thoại.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    setSuccessMessage('');

    if (items.length === 0) {
      setSuccessMessage('Giỏ hàng đang trống. Hãy thêm sản phẩm trước khi thanh toán.');
      return;
    }

    if (!validate()) {
      return;
    }

    if (paymentMethod === 'paypal') {
      setSuccessMessage('Đây là bản demo PayPal. Khi triển khai thật, nút này sẽ chuyển sang cổng thanh toán PayPal.');
      return;
    }

    if (paymentMethod === 'momo') {
      setSuccessMessage('Đây là bản demo MoMo. Người dùng có thể quét mã MoMo để xem luồng thanh toán.');
      return;
    }

    if (paymentMethod === 'bank_qr') {
      setSuccessMessage('Đây là bản demo QR ngân hàng. Người dùng có thể quét mã để xem trải nghiệm chuyển khoản.');
      return;
    }

    setSuccessMessage('Đơn hàng COD của bạn đã được ghi nhận thành công! FreshFoodStore sẽ sớm liên hệ để xác nhận.');
  };

  const inputClassName = (hasError?: boolean) =>
    `h-12 w-full rounded-xl border bg-white px-4 text-sm text-dark outline-none transition-colors placeholder:text-gray-400 ${
      hasError ? 'border-red-300 focus:border-red-400' : 'border-border-light focus:border-primary'
    }`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden px-4 py-8 md:py-10">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about/about-banner.svg')" }}
          />
          <div className="absolute inset-0 -z-10 bg-dark/70" />

          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Home size={14} />
                <span>Trang chủ</span>
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <Link href="/cart" className="transition-colors hover:text-primary">
                Giỏ hàng
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="font-semibold text-primary">Thanh toán</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-10">
              <section className="rounded-[24px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(26,26,26,0.05)] md:p-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-dark">Thông Tin Thanh Toán</h1>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Tên</label>
                    <input value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Tên của bạn" className={inputClassName(Boolean(errors.firstName))} />
                    {errors.firstName ? <p className="mt-2 text-xs text-red-500">{errors.firstName}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Họ</label>
                    <input value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Họ của bạn" className={inputClassName(Boolean(errors.lastName))} />
                    {errors.lastName ? <p className="mt-2 text-xs text-red-500">{errors.lastName}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Công ty (tùy chọn)</label>
                    <input value={companyName} onChange={(event) => setCompanyName(event.target.value)} placeholder="Tên công ty" className={inputClassName()} />
                  </div>
                  <div className="md:col-span-3">
                    <label className="mb-2 block text-sm font-medium text-dark">Địa chỉ</label>
                    <input value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Số nhà, tên đường, phường/xã" className={inputClassName(Boolean(errors.address))} />
                    {errors.address ? <p className="mt-2 text-xs text-red-500">{errors.address}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Quốc gia / Khu vực</label>
                    <select value={country} onChange={(event) => setCountry(event.target.value)} className={inputClassName(Boolean(errors.country))}>
                      <option value="vi">Việt Nam</option>
                      <option value="sg">Singapore</option>
                      <option value="th">Thái Lan</option>
                    </select>
                    {errors.country ? <p className="mt-2 text-xs text-red-500">{errors.country}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Tỉnh / Thành phố</label>
                    <select value={state} onChange={(event) => setState(event.target.value)} className={inputClassName(Boolean(errors.state))}>
                      <option value="">Chọn tỉnh/thành</option>
                      <option value="hcm">TP. Hồ Chí Minh</option>
                      <option value="hn">Hà Nội</option>
                      <option value="dn">Đà Nẵng</option>
                    </select>
                    {errors.state ? <p className="mt-2 text-xs text-red-500">{errors.state}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Mã bưu điện</label>
                    <input value={zipCode} onChange={(event) => setZipCode(event.target.value)} placeholder="700000" className={inputClassName(Boolean(errors.zipCode))} />
                    {errors.zipCode ? <p className="mt-2 text-xs text-red-500">{errors.zipCode}</p> : null}
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-dark">Email</label>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="fresh@foodstore.com" className={inputClassName(Boolean(errors.email))} />
                    {errors.email ? <p className="mt-2 text-xs text-red-500">{errors.email}</p> : null}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark">Số điện thoại</label>
                    <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="0900 123 456" className={inputClassName(Boolean(errors.phone))} />
                    {errors.phone ? <p className="mt-2 text-xs text-red-500">{errors.phone}</p> : null}
                  </div>
                </div>

                <label className="mt-5 inline-flex items-center gap-3 text-sm text-dark">
                  <input type="checkbox" checked={shipDifferentAddress} onChange={() => setShipDifferentAddress((current) => !current)} className="h-4 w-4 rounded border-border-light text-primary focus:ring-primary" />
                  Giao tới địa chỉ khác
                </label>
              </section>

              <section className="rounded-[24px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(26,26,26,0.05)] md:p-8">
                <h2 className="text-3xl font-extrabold tracking-tight text-dark">Thông Tin Bổ Sung</h2>
                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-dark">Ghi chú đơn hàng (tùy chọn)</label>
                  <textarea
                    value={orderNotes}
                    onChange={(event) => setOrderNotes(event.target.value)}
                    rows={5}
                    placeholder="Ghi chú cho đơn hàng, ví dụ: thời gian giao mong muốn hoặc lưu ý cho shipper"
                    className="w-full rounded-2xl border border-border-light bg-white px-4 py-3 text-sm text-dark outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                  />
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-[24px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(26,26,26,0.05)] md:p-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-dark">Tóm Tắt Đơn Hàng</h2>

              <div className="mt-6 space-y-4">
                {items.length > 0 ? (
                  items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-bg-light">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1 text-sm font-semibold text-dark">
                          {item.name} <span className="text-gray-text">x{item.quantity}</span>
                        </p>
                      </div>
                      <span className="text-sm font-bold text-dark">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-[#FCFCFC] px-4 py-6 text-sm text-gray-text">
                    Chưa có sản phẩm nào trong giỏ hàng.
                  </div>
                )}
              </div>

              <div className="mt-6 space-y-4 border-t border-border-light pt-6">
                <div className="flex items-center justify-between text-sm text-gray-text">
                  <span>Tạm tính</span>
                  <span className="font-semibold text-dark">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-text">
                  <span>Vận chuyển</span>
                  <span className="font-semibold text-dark">Miễn phí</span>
                </div>
                <div className="flex items-center justify-between text-base text-dark">
                  <span className="font-semibold">Tổng cộng</span>
                  <span className="text-3xl font-extrabold">{formatPrice(cartTotal)}</span>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#FCFCFC] p-4">
                <div className="flex items-center justify-between text-sm text-gray-text">
                  <span>Số loại sản phẩm</span>
                  <span className="font-semibold text-dark">{items.length}</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-gray-text">
                  <span>Tổng số lượng</span>
                  <span className="font-semibold text-dark">{totalQuantity}</span>
                </div>
              </div>

              <div className="mt-8 border-t border-border-light pt-6">
                <h3 className="text-2xl font-bold text-dark">Phương Thức Thanh Toán</h3>
                <div className="mt-5 space-y-4">
                  <label className="flex items-center gap-3 text-sm text-dark">
                    <input type="radio" name="paymentMethod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="h-4 w-4 border-border-light text-primary focus:ring-primary" />
                    Thanh toán khi nhận hàng
                  </label>
                  <label className="flex items-center gap-3 text-sm text-dark">
                    <input type="radio" name="paymentMethod" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="h-4 w-4 border-border-light text-primary focus:ring-primary" />
                    PayPal
                  </label>
                  <label className="flex items-center gap-3 text-sm text-dark">
                    <input type="radio" name="paymentMethod" checked={paymentMethod === 'bank_qr'} onChange={() => setPaymentMethod('bank_qr')} className="h-4 w-4 border-border-light text-primary focus:ring-primary" />
                    QR ngân hàng
                  </label>
                  <label className="flex items-center gap-3 text-sm text-dark">
                    <input type="radio" name="paymentMethod" checked={paymentMethod === 'momo'} onChange={() => setPaymentMethod('momo')} className="h-4 w-4 border-border-light text-primary focus:ring-primary" />
                    Ví MoMo
                  </label>
                </div>
              </div>

              {paymentMethod === 'bank_qr' ? (
                <div className="mt-6 rounded-2xl border border-border-light bg-[#FCFCFC] p-4">
                  <div className="space-y-3">
                    <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-2xl border border-border-light bg-white p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhSHcD1YshU-1l9D4x6r3IU2csXEcPdE-9Sub6J1372xZHafkgTQPpEw&s=10" alt="QR ngân hàng demo" className="h-full w-full object-contain" />
                    </div>
                    <p className="text-sm text-dark">
                      Ngân hàng: <span className="font-semibold">Vietcombank Demo</span>
                    </p>
                    <p className="text-sm text-dark">
                      Số tài khoản: <span className="font-semibold">1234 5678 9999</span>
                    </p>
                    <p className="text-sm text-dark">
                      Chủ tài khoản: <span className="font-semibold">FRESHFOODSTORE CO.</span>
                    </p>
                    <p className="text-sm text-dark">
                      Nội dung CK: <span className="font-semibold">FFS-DEMO-2026</span>
                    </p>
                  </div>
                </div>
              ) : null}

              {paymentMethod === 'paypal' ? (
                <div className="mt-6 rounded-2xl border border-border-light bg-[#FCFCFC] p-4 text-sm text-gray-text">
                  <div className="overflow-hidden rounded-2xl border border-border-light bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://scanova.io/blog/wp-content/uploads/2015/05/paypal-qr-code.webp" alt="PayPal demo" className="h-auto w-full object-cover" />
                  </div>
                  <p className="mt-3">Đây là giao diện minh họa cho bước chuyển sang PayPal.</p>
                </div>
              ) : null}

              {paymentMethod === 'momo' ? (
                <div className="mt-6 rounded-2xl border border-border-light bg-[#FCFCFC] p-4 text-sm text-gray-text">
                  <div className="mx-auto h-[220px] w-[220px] overflow-hidden rounded-2xl border border-border-light bg-white p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/MoMo_QR_payment_frame_design_202606271201.jpeg" alt="MoMo demo QR" className="h-full w-full object-contain" />
                  </div>
                  <p className="mt-3 text-dark">
                    Ví: <span className="font-semibold">MoMo Demo</span>
                  </p>
                  <p>Mã QR minh họa để người dùng hình dung luồng thanh toán bằng MoMo.</p>
                </div>
              ) : null}

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-8 flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-primary-hover"
              >
                Đặt hàng
              </button>

              {successMessage ? <p className="mt-4 text-sm leading-6 text-gray-text">{successMessage}</p> : null}
            </aside>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
