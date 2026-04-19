#!/usr/bin/env bash
# =====================================================================
# LSR Building — .htaccess generator
# =====================================================================
# Schrijft out/.htaccess voor Apache shared-hosting (Easyhost / cPanel).
# Wordt automatisch aangeroepen na `npm run build:prod`.
#
# Wordt NIET aangeroepen bij build:ghpages — GitHub Pages gebruikt
# geen Apache, dus daar is dit bestand niet relevant.
# =====================================================================

set -euo pipefail

# Bepaal de out-map relatief t.o.v. dit script (werkt ongeacht waar
# je npm run vanuit draait).
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
OUT_DIR="${SCRIPT_DIR}/../out"

if [ ! -d "${OUT_DIR}" ]; then
  echo "✗ out/ bestaat niet. Eerst 'npm run build:prod' draaien." >&2
  exit 1
fi

cat > "${OUT_DIR}/.htaccess" <<'HTACCESS'
# LSR Building · Apache config (productie: lsr-building.be)
# Gegenereerd door scripts/make-htaccess.sh — niet handmatig bewerken.

RewriteEngine On

# Forceer HTTPS
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Forceer apex-domein (geen www)
RewriteCond %{HTTP_HOST} ^www\.lsr-building\.be$ [NC]
RewriteRule ^(.*)$ https://lsr-building.be/$1 [L,R=301]

# SPA / static-export fallback
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
  Header set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Compressie
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript
  AddOutputFilterByType DEFLATE application/javascript application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType image/png "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 month"
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType font/woff2 "access plus 1 year"
</IfModule>

ErrorDocument 404 /404.html

<FilesMatch "^\.">
  Require all denied
</FilesMatch>
HTACCESS

LINE_COUNT=$(wc -l < "${OUT_DIR}/.htaccess" | tr -d ' ')
echo "✓ out/.htaccess aangemaakt (${LINE_COUNT} regels)"
