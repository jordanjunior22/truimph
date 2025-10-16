# 🔧 Facebook Pixel Debugging Guide

## ✅ What Was Fixed

1. **Added error handling** to tracking functions
2. **Added console logging** to verify pixel loads
3. **Added pixel verification** useEffect hook
4. **Improved fbq availability check**
5. **Added strategy attribute** to script tag

---

## 🧪 Step-by-Step Testing

### Step 1: Open Browser Console
```
Press F12 (Windows) or Cmd+Option+I (Mac)
Go to "Console" tab
```

### Step 2: Check Pixel Loaded
You should see:
```
✅ Facebook Pixel initialized
✅ Facebook Pixel loaded successfully
Pixel ID: 887402196248385
```

### Step 3: Click WhatsApp Button
You should see in console:
```
Tracking Contact event: [Button Name]
Tracking Lead event: [Button Name]
```

### Step 4: Check Pixel Helper
- Click Pixel Helper extension
- Should show ✅ Pixel Found
- Should show Contact event
- Should show Lead event

---

## 🔍 Troubleshooting

### Issue 1: "fbq not available yet"

**Solution:**
1. Wait 2-3 seconds for pixel to load
2. Hard refresh: Ctrl+Shift+R
3. Clear cache: Ctrl+Shift+Delete
4. Try again

### Issue 2: No Console Messages

**Check:**
1. Is console open? (F12)
2. Is filter set to "All"? (not "Errors" only)
3. Scroll up in console to see earlier messages
4. Hard refresh page

### Issue 3: Pixel Helper Shows Pixel But No Events

**Check:**
1. Open console (F12)
2. Click WhatsApp button
3. Look for "Tracking Contact event" message
4. If not there, pixel isn't firing
5. Check for errors in console

### Issue 4: Events Not Appearing in Pixel Helper

**Try:**
1. Hard refresh: Ctrl+Shift+R
2. Close and reopen Pixel Helper
3. Click button again
4. Wait 5 seconds
5. Check Pixel Helper again

---

## 📊 Console Output Examples

### ✅ Correct Output

**On Page Load:**
```
Facebook Pixel initialized
✅ Facebook Pixel loaded successfully
Pixel ID: 887402196248385
```

**On WhatsApp Click:**
```
Tracking Contact event: Hero Consultation Button
Tracking Lead event: Hero Consultation Button
```

**On Video Click:**
```
Tracking ViewContent event
```

### ❌ Error Output

**If fbq not available:**
```
⚠️ fbq not available yet
```

**If error occurs:**
```
Error tracking WhatsApp click: [error message]
```

---

## 🎯 What Each Message Means

| Message | Meaning | Action |
|---------|---------|--------|
| `Facebook Pixel initialized` | Pixel script loaded | ✅ Good |
| `Facebook Pixel loaded successfully` | fbq function ready | ✅ Good |
| `Tracking Contact event` | Event fired | ✅ Good |
| `Tracking Lead event` | Event fired | ✅ Good |
| `Tracking ViewContent event` | Event fired | ✅ Good |
| `fbq not available yet` | Pixel still loading | ⏳ Wait & retry |
| `Error tracking...` | Something went wrong | ❌ Check error |

---

## 🔧 Manual Testing in Console

### Test 1: Check fbq Exists
```javascript
console.log(window.fbq);
// Should output: ƒ fbq(n){...}
```

### Test 2: Manually Track Event
```javascript
fbq('track', 'TestEvent', {
  content_name: 'Manual Test',
  content_type: 'product'
});
// Should appear in Pixel Helper
```

### Test 3: Check Pixel ID
```javascript
console.log('Pixel ID: 887402196248385');
```

---

## 📱 Testing on Different Browsers

### Chrome (Recommended)
- ✅ Best for testing
- ✅ Pixel Helper available
- ✅ Full console access

### Firefox
- ✅ Works fine
- ⚠️ No Pixel Helper
- ✅ Console available

### Safari
- ✅ Works fine
- ⚠️ No Pixel Helper
- ✅ Console available

### Edge
- ✅ Works fine
- ✅ Pixel Helper available
- ✅ Console available

---

## 🚀 Production Testing

### After Deploying

1. **Visit your production URL**
2. **Open Console (F12)**
3. **Look for pixel messages**
4. **Click buttons**
5. **Check for tracking messages**
6. **Open Pixel Helper**
7. **Should show events**

---

## 📊 Expected Timeline

| Time | What Happens |
|------|--------------|
| Immediately | Console shows pixel loaded |
| On button click | Console shows tracking message |
| 1-2 seconds | Pixel Helper shows event |
| 15-30 min | Events appear in Events Manager |
| 1-2 hours | Events appear in Ads Manager |

---

## ✅ Verification Checklist

- [ ] Console shows "Facebook Pixel initialized"
- [ ] Console shows "Facebook Pixel loaded successfully"
- [ ] Clicking WhatsApp button shows "Tracking Contact event"
- [ ] Clicking WhatsApp button shows "Tracking Lead event"
- [ ] Clicking video button shows "Tracking ViewContent event"
- [ ] Pixel Helper shows ✅ Pixel Found
- [ ] Pixel Helper shows events when buttons clicked
- [ ] No errors in console

---

## 🎯 If Still Not Working

1. **Clear everything:**
   - Close browser completely
   - Clear cache: Ctrl+Shift+Delete
   - Restart browser
   - Go to localhost:3000

2. **Check code:**
   - Open app/layout.js
   - Verify pixel ID: 887402196248385
   - Verify fbq('init', '887402196248385')
   - Verify fbq('track', 'PageView')

3. **Check page.js:**
   - Verify handleWhatsAppClick function exists
   - Verify handleVideoClick function exists
   - Verify buttons call these functions

4. **Try different browser:**
   - Chrome, Firefox, Safari, Edge
   - See if issue persists

5. **Hard refresh:**
   - Ctrl+Shift+R (Windows)
   - Cmd+Shift+R (Mac)

---

## 📞 Support

If still having issues:
1. Check console for error messages
2. Verify Pixel ID: 887402196248385
3. Check app/layout.js has pixel code
4. Check app/page.js has tracking functions
5. Try different browser
6. Clear cache completely

---

**Last Updated**: 2025-10-16  
**Status**: ✅ Debugging Guide Ready

