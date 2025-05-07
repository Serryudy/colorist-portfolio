export async function POST(request) {
    try {
      const data = await request.json();
      const { 
        alert_name, 
        checkout_id,
        email,
        passthrough, 
        p_signature 
      } = data;
  
      // For development, log the webhook data
      console.log(`Received Paddle webhook: ${alert_name}`);
      
      // TODO: Implement signature verification in production
      
      // Process different webhook events
      switch (alert_name) {
        case 'payment_succeeded':
          // Handle successful payment
          console.log(`Payment succeeded for checkout ${checkout_id}`);
          // You could update a database, send a confirmation email, etc.
          break;
        
        case 'payment_refunded':
          // Handle refund
          console.log(`Payment refunded for checkout ${checkout_id}`);
          break;
        
        // Handle other webhook events as needed
        
        default:
          console.log(`Received webhook ${alert_name}`);
      }
  
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Webhook error:', error);
      return new Response(JSON.stringify({ message: 'Webhook processing failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }