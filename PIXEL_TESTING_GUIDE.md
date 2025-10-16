# 🔍 Facebook Pixel Testing Guide

## ✅ What Was Fixed

The Facebook Pixel code has been moved from `page.js` to `layout.js` in the `<head>` tag for proper implementation.

**Pixel ID**: `887402196248385`

---

## 🧪 Testing on Localhost

### Step 1: Install Facebook Pixel Helper
1. Go to Chrome Web Store
2. Search: "Facebook Pixel Helper"
3. Click "Add to Chrome"
4. Confirm installation

### Step 2: Start Your Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Step 3: Open Your Website
- Go to: `http://localhost:3000`

### Step 4: Open Pixel Helper
1. Click the Pixel Helper extension icon (top right)
2. You should see a **green checkmark** ✅
3. Click to expand and see events

---

## 📊 What You Should See

### On Page Load
```
✅ Pixel Found
✅ PageView Event
   └─ Event ID: [unique ID]
   └─ Timestamp: [current time]
```

### When Clicking WhatsApp Button
```
✅ Contact Event
   ├─ content_name: "Button Name"
   ├─ content_type: "product"
   └─ Timestamp: [current time]

✅ Lead Event
   ├─ content_name: "Button Name"
   ├─ content_type: "product"
   └─ Timestamp: [current time]
```

### When Clicking Video Button
```
✅ ViewContent Event
   ├─ content_name: "Testimonials Video"
   ├─ content_type: "video"
   └─ Timestamp: [current time]
```

---

## 🚨 Troubleshooting

### Issue: "No pixel found"

**Solution 1: Clear Cache**
```
1. Press Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
2. Select "All time"
3. Check "Cookies and other site data"
4. Click "Clear data"
5. Refresh page
```

**Solution 2: Disable Ad Blockers**
- Disable uBlock Origin
- Disable Adblock Plus
- Disable any other ad blockers
- Refresh page

**Solution 3: Check Browser Console**
1. Press F12 (or Cmd+Option+I on Mac)
2. Go to "Console" tab
3. Look for errors
4. Should see: `fbq is not defined` → This is OK (pixel is loading)

**Solution 4: Hard Refresh**
- Press Ctrl+Shift+R (Windows)
- Press Cmd+Shift+R (Mac)

### Issue: Events Not Showing

**Check 1: Pixel ID**
- Verify: `887402196248385` is correct
- Check in `app/layout.js` line 35

**Check 2: fbq Function**
- Open Console (F12)
- Type: `window.fbq`
- Should return a function, not undefined

**Check 3: Event Tracking**
- Open Console
- Type: `fbq('track', 'TestEvent')`
- Should appear in Pixel Helper

---

## 🔧 Manual Testing in Console

### Test 1: Check Pixel Loaded
```javascript
console.log(window.fbq);
// Should output: ƒ fbq(n){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)}
```

### Test 2: Track Custom Event
```javascript
fbq('track', 'TestEvent', {
  content_name: 'Test',
  content_type: 'product'
});
```

### Test 3: Check Pixel Helper
- Should show "TestEvent" in Pixel Helper

---

## 📱 Testing on Different Devices

### Desktop (Recommended)
- ✅ Best for testing
- ✅ Pixel Helper available
- ✅ Full console access

### Mobile
- ⚠️ Pixel Helper not available
- ✅ Pixel still tracks
- ✅ Use Facebook Events Manager instead

### Testing Mobile Events
1. Go to Facebook Events Manager
2. Select your pixel
3. Go to "Test Events" tab
4. Click buttons on mobile
5. Events appear in real-time

---

## 🌐 Testing on Production

### After Deploying to Production

1. **Verify Pixel in Head**
   - Right-click page → "View Page Source"
   - Search: "fbevents.js"
   - Should find the script tag

2. **Use Pixel Helper**
   - Install on Chrome
   - Visit your production URL
   - Should show ✅ Pixel Found

3. **Use Events Manager**
   - Go to Facebook Events Manager
   - Select your pixel
   - Go to "Test Events" tab
   - Click buttons
   - Events should appear within 15-30 minutes

---

## ✅ Checklist Before Going Live

- [ ] Pixel ID is correct: `887402196248385`
- [ ] Pixel code is in `app/layout.js` `<head>` tag
- [ ] PageView event fires on page load
- [ ] Contact event fires on WhatsApp clicks
- [ ] Lead event fires on WhatsApp clicks
- [ ] ViewContent event fires on video clicks
- [ ] All events show in Pixel Helper
- [ ] No console errors
- [ ] Ad blockers disabled during testing
- [ ] Tested on desktop and mobile

---

## 📊 Expected Results Timeline

| Time | What Happens |
|------|--------------|
| Immediately | Events appear in Pixel Helper |
| 15-30 min | Events appear in Events Manager |
| 1-2 hours | Events appear in Ads Manager |
| 24 hours | Full analytics available |

---

## 🎯 Next Steps

1. **Test locally** with Pixel Helper
2. **Deploy to production**
3. **Verify on production** with Pixel Helper
4. **Create conversion campaign** in Ads Manager
5. **Select "Lead" event** as conversion
6. **Monitor performance** in Ads Manager

---

## 📞 Support

If pixel still not showing:
1. Check `app/layout.js` has the pixel code
2. Check `app/page.js` has tracking functions
3. Verify Pixel ID: `887402196248385`
4. Clear browser cache completely
5. Disable all ad blockers
6. Try different browser (Firefox, Safari, Edge)

---

**Last Updated**: 2025-10-16  
**Status**: ✅ Ready for Testing

