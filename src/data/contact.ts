export interface ContactDetails {
  address: string;
  emails: string[];
  phones: string[];
  mapEmbedUrl: string;
}

export const contactDetails: ContactDetails = {
  address: '123 Đường Sạch, Thảo Điền, Quận 2, TP.HCM',
  emails: ['support@freshfoodstore.com', 'help@freshfoodstore.com'],
  phones: ['(219) 555-0114', '(164) 333-0487'],
  mapEmbedUrl:
    'https://www.google.com/maps?q=123%20%C4%90%C6%B0%E1%BB%9Dng%20S%E1%BA%A1ch%2C%20Th%E1%BA%A3o%20%C4%90i%E1%BB%81n%2C%20Qu%E1%BA%ADn%202%2C%20TP.HCM&z=14&output=embed',
};
