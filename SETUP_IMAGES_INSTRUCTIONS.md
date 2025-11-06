# 🎨 HOW TO ADD YOUR COMPANY LOGOS AND PROFILE IMAGE

## Step 1: Save the Company Logos

From the images you attached to the chat:

### KPMG Logo
1. Save the KPMG logo image (the blue KPMG logo from attachments)
2. Rename it to: `kpmg-logo.png`
3. Place it in: `assets/images/kpmg-logo.png`
4. This will replace the placeholder SVG

### Bank of Singapore Logo
1. Save the Bank of Singapore logo (the red circular logo from attachments)
2. Rename it to: `bos-logo.png`
3. Place it in: `assets/images/bos-logo.png`
4. This will replace the placeholder SVG

## Step 2: Save Your Profile Image

1. Save your Tokyo photo (the one in the rain with city lights in background)
2. Rename it to: `profile.jpg`
3. Place it in: `assets/images/profile.jpg`
4. This will create a subtle faded background effect in the About section

## Current Status

✅ Website structure updated with logo placeholders
✅ About section redesigned (cleaner, less wordy)
✅ Hero subtitle changed to "AI Developer | Data Science | Full Stack"
✅ Company logos integrated into Experience timeline
✅ Profile image set as faded background in About section

## After Adding Real Images

The website will automatically display:
- Company logos next to each internship in the timeline
- Your profile photo as a subtle (3% opacity) background in the About section
- Professional appearance with real branding

## File Locations to Update

```
maxim.github.io/
└── assets/
    └── images/
        ├── kpmg-logo.png    ← Add KPMG logo here
        ├── bos-logo.png     ← Add Bank of Singapore logo here
        └── profile.jpg      ← Add your Tokyo photo here
```

## Quick PowerShell Commands (if images are in Downloads)

```powershell
# Copy KPMG logo
copy "$env:USERPROFILE\Downloads\kpmg-logo.png" "assets\images\kpmg-logo.png"

# Copy Bank of Singapore logo
copy "$env:USERPROFILE\Downloads\bos-logo.png" "assets\images\bos-logo.png"

# Copy profile image
copy "$env:USERPROFILE\Downloads\profile.jpg" "assets\images\profile.jpg"
```

Then update the HTML to use `.png` instead of `.svg`:
- Change `kpmg-logo.svg` → `kpmg-logo.png`
- Change `bos-logo.svg` → `bos-logo.png`
