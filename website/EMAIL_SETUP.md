# 📧 Email Setup voor LSR Building Website

## Huidige Configuratie
- **Verzendadres:** mojotrading73@gmail.com
- **Service:** Gmail SMTP
- **Ontvanger:** mojotrading73@gmail.com (voor testing)

## Stap 1: Gmail App-Specifiek Wachtwoord Genereren

1. Ga naar: https://myaccount.google.com/apppasswords
2. Zorg dat "2-Step Verification" is ingeschakeld op het Gmail account
3. Selecteer "Mail" en "Windows Computer"
4. Kopieer het gegenereerde wachtwoord (16 karakters)

## Stap 2: .env.local Configureren

Open `/website/.env.local` en vervang:
```
EMAIL_PASSWORD=your_app_specific_password_here
```

Met het gegenereerde wachtwoord:
```
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

## Stap 3: Testen

1. Browser: http://localhost:3000
2. Scroll naar "Contact" sectie
3. Vul het formulier in
4. Klik "Offerte Aanvragen" of "Bericht Verzenden"

**Admin Email:** mojotrading73@gmail.com (ontvangt het verzoek)
**Customer Email:** User's e-mailadres (krijgt bevestiging)

## Production Deployment

Voor production moet je dit aanpassen:

1. **Email adres**: Update `companyData.ts` naar het echte bedrijfsemail
2. **Environment Variables**: Voeg `EMAIL_USER` en `EMAIL_PASSWORD` toe in je hosting provider (Vercel, etc.)
3. **Email Service**: Overweeg een professionele service als SendGrid/Resend

## Huidige Test Status
- ✅ API route aangemaakt: `/api/send-mail`
- ✅ Frontend formulier geïntegreerd
- ✅ Error handling ingebouwd
- ✅ Loading states werkend
- ⏳ Email verzending (wacht op .env.local configuratie)

## Troubleshooting

### "Er is een fout opgetreden"
- Controleer of EMAIL_PASSWORD correct is ingevuld
- Check console logs in browser (F12 → Console)
- Verify Gmail app-wachtwoord is gegenereerd correct

### Email komt niet aan
- Spam/Junk folder checken
- Zorg dat 2FA is ingeschakeld op Gmail
- Probeer app-specifiek wachtwoord opnieuw genereren

## Email Template Preview

**Admin Email (mojotrading73@gmail.com):**
```
Onderwerp: 🔴 Nieuwe Offerteverzoek van [Naam]

[Gedetailleerde formuliergegevens]
```

**Customer Email (naar gebruiker):**
```
Onderwerp: LSR Building - Wij hebben uw bericht ontvangen

Bedanking + confirmation van hun gegevens
```
