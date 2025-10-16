# Facebook Pixel Tracking Setup - Triumph Website

## Pixel ID
**887402196248385**

## Tracking Events Implemented

### 1. **Page View Event** ✅
- **Location**: Page load (useEffect hook)
- **Event**: `PageView`
- **Trigger**: Automatically fires when page loads
- **Purpose**: Track all page visits

```javascript
fbq('track', 'PageView');
```

---

## Action Button Tracking

### 2. **WhatsApp Contact Events** ✅
All WhatsApp buttons now track TWO events:

#### Event 1: Contact
```javascript
window.fbq('track', 'Contact', {
  content_name: buttonName,
  content_type: 'product'
});
```

#### Event 2: Lead
```javascript
window.fbq('track', 'Lead', {
  content_name: buttonName,
  content_type: 'product'
});
```

---

## Button Tracking Details

### Floating Action Buttons
1. **WhatsApp Button** (Bottom Right)
   - Event: `Contact` + `Lead`
   - Content Name: `'Floating WhatsApp Button'`
   - URL: `https://wa.me/237691583934`

2. **Video Button** (Bottom Right)
   - Event: `ViewContent`
   - Content Name: `'Testimonials Video'`
   - Action: Opens testimonials video modal

### Hero Section Buttons
1. **Consultation Gratuite Button**
   - Event: `Contact` + `Lead`
   - Content Name: `'Hero Consultation Button'`
   - URL: `https://wa.me/237691583934`

2. **Voir Comment Ça Marche Button**
   - Event: `ViewContent`
   - Content Name: `'Testimonials Video'`
   - Action: Opens testimonials video modal

### Service Cards (3 Cards)
1. **Formation Linguistique Elite**
   - Event: `Contact` + `Lead`
   - Content Name: `'Service Card - Formation Linguistique Elite'`
   - URL: `https://wa.me/237691583934`

2. **Préparation Examens Certifiés** (Popular)
   - Event: `Contact` + `Lead`
   - Content Name: `'Service Card - Préparation Examens Certifiés'`
   - URL: `https://wa.me/237691583934`

3. **Immigration Clé en Main**
   - Event: `Contact` + `Lead`
   - Content Name: `'Service Card - Immigration Clé en Main'`
   - URL: `https://wa.me/237691583934`

### Final CTA Section
1. **Démarrer Gratuitement Button**
   - Event: `Contact` + `Lead`
   - Content Name: `'Final CTA Button'`
   - URL: `https://wa.me/237691583934`

---

## Event Summary

| Event Type | Count | Trigger |
|-----------|-------|---------|
| PageView | 1 | Page Load |
| Contact | 6 | WhatsApp Button Clicks |
| Lead | 6 | WhatsApp Button Clicks |
| ViewContent | 2 | Video Button Clicks |

**Total Tracked Actions**: 15 different tracking points

---

## WhatsApp Integration

All WhatsApp buttons redirect to:
```
https://wa.me/237691583934
```

**Phone Number**: +237691583934 (Cameroon)

---

## How It Works

1. **User visits page** → `PageView` event fires
2. **User clicks WhatsApp button** → `Contact` + `Lead` events fire + redirects to WhatsApp
3. **User clicks video button** → `ViewContent` event fires + opens video modal
4. **Each button tracks its source** → Custom `content_name` identifies which button was clicked

---

## Testing the Pixel

1. Go to Facebook Pixel Helper (Chrome Extension)
2. Visit your website
3. You should see:
   - ✅ PageView event on page load
   - ✅ Contact event when clicking WhatsApp buttons
   - ✅ Lead event when clicking WhatsApp buttons
   - ✅ ViewContent event when clicking video buttons

---

## Notes

- All events include `content_type: 'product'` for better Facebook Ads optimization
- Each WhatsApp button click is tracked with a unique identifier
- Video clicks are tracked separately to measure engagement
- The pixel is initialized with the correct ID: `887402196248385`

