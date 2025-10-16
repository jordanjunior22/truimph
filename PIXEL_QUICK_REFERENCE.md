# 🎯 Facebook Pixel Tracking - Quick Reference

## ✅ What's Implemented

### Pixel ID
```
887402196248385
```

### Events Tracked

#### 1️⃣ Page View (Automatic)
- Fires when page loads
- Tracks all visitors

#### 2️⃣ Contact Events (WhatsApp Clicks)
- **6 WhatsApp buttons** track Contact + Lead events
- Each button identified by name
- Redirects to: `https://wa.me/237691583934`

#### 3️⃣ Video View Events
- **2 Video buttons** track ViewContent events
- Opens testimonials modal

---

## 📍 Button Locations & Tracking

### 1. Floating Action Buttons (Bottom Right)
```
✅ WhatsApp Button
   └─ Events: Contact + Lead
   └─ Name: "Floating WhatsApp Button"
   └─ Action: Opens WhatsApp

✅ Video Button
   └─ Event: ViewContent
   └─ Name: "Testimonials Video"
   └─ Action: Opens video modal
```

### 2. Hero Section
```
✅ Consultation Gratuite Button
   └─ Events: Contact + Lead
   └─ Name: "Hero Consultation Button"
   └─ Action: Opens WhatsApp

✅ Voir Comment Ça Marche Button
   └─ Event: ViewContent
   └─ Name: "Testimonials Video"
   └─ Action: Opens video modal
```

### 3. Service Cards (3 Cards)
```
✅ Formation Linguistique Elite
   └─ Events: Contact + Lead
   └─ Name: "Service Card - Formation Linguistique Elite"

✅ Préparation Examens Certifiés (Popular)
   └─ Events: Contact + Lead
   └─ Name: "Service Card - Préparation Examens Certifiés"

✅ Immigration Clé en Main
   └─ Events: Contact + Lead
   └─ Name: "Service Card - Immigration Clé en Main"
```

### 4. Final CTA Section
```
✅ Démarrer Gratuitement Button
   └─ Events: Contact + Lead
   └─ Name: "Final CTA Button"
   └─ Action: Opens WhatsApp
```

---

## 🔍 How to Verify

### Using Facebook Pixel Helper (Chrome Extension)

1. Install: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/)
2. Visit your website
3. Click the extension icon
4. You should see:
   - ✅ **PageView** - on page load
   - ✅ **Contact** - when clicking WhatsApp buttons
   - ✅ **Lead** - when clicking WhatsApp buttons
   - ✅ **ViewContent** - when clicking video buttons

### In Facebook Ads Manager

1. Go to Events Manager
2. Select your pixel (887402196248385)
3. Check "Test Events" tab
4. Click buttons on your website
5. Events should appear in real-time

---

## 📊 Event Data Sent

Each event includes:
```javascript
{
  content_name: "Button Name",      // Identifies which button
  content_type: "product"            // For ads optimization
}
```

---

## 🚀 WhatsApp Integration

All WhatsApp buttons redirect to:
```
https://wa.me/237691583934
```

**Phone**: +237691583934 (Cameroon)

---

## 💡 What This Enables

✅ Track visitor behavior  
✅ Measure conversion rates  
✅ Create custom audiences  
✅ Retarget interested users  
✅ Optimize ad spending  
✅ Calculate ROI  

---

## 🔧 Code Reference

### Main Tracking Function
```javascript
const handleWhatsAppClick = (buttonName = 'WhatsApp') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: buttonName,
      content_type: 'product'
    });
    window.fbq('track', 'Lead', {
      content_name: buttonName,
      content_type: 'product'
    });
  }
};
```

### Video Tracking Function
```javascript
const handleVideoClick = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: 'Testimonials Video',
      content_type: 'video'
    });
  }
};
```

---

## 📈 Expected Results

After implementation, you should see in Facebook Ads Manager:
- Increased pixel activity
- Better audience insights
- Conversion tracking
- User journey mapping
- ROI calculation

---

## ⚠️ Important Notes

- Pixel ID: `887402196248385` (verify this is correct)
- All WhatsApp links go to: `+237691583934`
- Events fire BEFORE redirect to WhatsApp
- Video events track engagement
- All events are real-time

---

**Last Updated**: 2025-10-16  
**Status**: ✅ Active & Tracking

