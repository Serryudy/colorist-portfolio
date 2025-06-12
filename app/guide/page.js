import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CineGradeGuide = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section className="py-5 text-center" style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))', 
        backgroundSize: 'cover',
        padding: '100px 0'
      }}>
        <div className="container">
          <h1 className="display-1">LUMINORA <span className="text-warning">POWERGRADE</span></h1>
          <p className="lead my-4">Professional color grading workflow inspired by high-end cinema cameras</p>
        </div>
      </section>
      
      {/* Workflow Overview */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">WORKFLOW</h2>
          <div className="row">
            <div className="col-md-7">
              <p className="fs-5">
                A meticulously crafted node structure that transforms ordinary footage into cinematic masterpieces. This PowerGrade emulates the look and feel of footage shot on high-end cinema cameras, with film-like characteristics, balanced highlights and shadows, and the texture that defines professional cinematography.
              </p>
              <div className="fst-italic fs-4 text-secondary my-5 text-center px-4">
                "The right color grade doesn't just correct an image — it tells a story."
              </div>
            </div>
            <div className="col-md-5">
              <div className="bg-dark d-flex align-items-center justify-content-center" style={{height: '300px', borderRadius: '5px'}}>
                <img src="/images/powergrade/overview.png" alt="CineGrade Overview" className="img-fluid" />
              </div>
            </div>
          </div>
          
          <div className="bg-dark p-4 rounded mt-5">
            <h4 className="mb-4">NODE STRUCTURE</h4>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Input Device Transformation</div>
              <div className="text-warning font-monospace">→ ACES CC & AP0</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Parallel Correction Nodes</div>
              <div className="text-warning font-monospace">× 3</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Kodak Print Color Node</div>
              <div className="text-warning font-monospace">Serial</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">ACES → Rec709 Transformation</div>
              <div className="text-warning font-monospace">CST</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Look Development Nodes</div>
              <div className="text-warning font-monospace">× 3 Parallel</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Film LUT Application</div>
              <div className="text-warning font-monospace">Compound</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Film Saturation</div>
              <div className="text-warning font-monospace">Compound</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Skin Tone Correction</div>
              <div className="text-warning font-monospace">Serial</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Finishing Nodes</div>
              <div className="text-warning font-monospace">× 6</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Input Device Transformation */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">INPUT DEVICE TRANSFORMATION</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="fs-5">
                The foundation of our PowerGrade begins with transforming your footage to the Academy Color Encoding System (ACES) colorspace and AP0 primaries. This critical first step provides a standardized, high-dynamic-range, wide-gamut foundation that ensures consistency across different camera systems and preserves all the nuances of your original footage.
              </p>
              <div className="bg-dark p-4 rounded my-4">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Input Colorspace</div>
                  <div className="text-warning font-monospace">Camera Native</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Output Colorspace</div>
                  <div className="text-warning font-monospace">ACES CC</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Output Primaries</div>
                  <div className="text-warning font-monospace">AP0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-dark d-flex align-items-center justify-content-center" style={{height: '300px', borderRadius: '5px'}}>
                <img src="/images/powergrade/CST.png" alt="Input Device Transformation" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parallel Correction Nodes */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">CORRECTION NODES</h2>
          <p className="fs-5">
            Three parallel nodes work in harmony to correct and enhance your footage, each serving a specific purpose in balancing the image and retrieving cinematic qualities.
          </p>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <h3 className="text-warning">EXPOSURE</h3>
              <p>Precision-tuned exposure adjustments compress highlights to achieve that balanced, film-like exposure look. The carefully calibrated settings prevent digital clipping while maintaining the rich gradation that characterizes high-end cinema cameras.</p>
              <div className="bg-dark p-4 rounded my-3">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Highlights</div>
                  <div className="text-warning font-monospace">Compressed</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Midtones</div>
                  <div className="text-warning font-monospace">Balanced</div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-warning">WHITE BALANCE</h3>
              <p>A specialized white balance node with reduced gain (0.2) provides subtle but critical color temperature adjustments. This refinement ensures natural skin tones and atmospheric color temperature that can be fine-tuned with the gain wheel.</p>
              <div className="bg-dark p-4 rounded my-3">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Gain</div>
                  <div className="text-warning font-monospace">0.2</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Adjustment</div>
                  <div className="text-warning font-monospace">Gain Wheel</div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-warning">HDR RETRIEVAL</h3>
              <p>This specialized node recovers the true HDR look of high-end cinema cameras. Using a luminance mask created with the qualifier and a specified luminance curve, it retrieves critical shadow details that bring depth and dimension to your footage.</p>
              <div className="bg-dark p-4 rounded my-3">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Mask Type</div>
                  <div className="text-warning font-monospace">Luminance</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Tool</div>
                  <div className="text-warning font-monospace">Qualifier</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark d-flex align-items-center justify-content-center mt-5" style={{height: '300px', borderRadius: '5px'}}>
            <img src="/images/powergrade/correction.png" alt="Correction Nodes" className="img-fluid" />
          </div>
        </div>
      </section>
      
      {/* Kodak Print Color */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">KODAK PRINT COLOR</h2>
          <div className="row">
            <div className="col-lg-7">
              <p className="fs-5">
                After combining the three correction nodes, a serial node creates the iconic Kodak print color tone. This node is meticulously calibrated with tweaked RGB values to emulate the distinctive color science that made Kodak film stocks legendary in cinema history.
              </p>
              <div className="bg-dark p-4 rounded my-4">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Red Channel</div>
                  <div className="text-warning font-monospace">Custom Balanced</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Green Channel</div>
                  <div className="text-warning font-monospace">Custom Balanced</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Blue Channel</div>
                  <div className="text-warning font-monospace">Custom Balanced</div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-dark d-flex align-items-center justify-content-center" style={{height: '300px', borderRadius: '5px'}}>
                <img src="/images/powergrade/kodakprintcolor.png" className="img-fluid" alt="Kodak Print Color" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CST Transformation */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">CST</h2>
          <p className="fs-5">
            The Color Space Transform node carefully converts our ACES colorspace footage back to Rec709, ensuring that all previous transformations' outputs match properly with this node's input. This critical step maintains color fidelity while preparing the image for the creative look development nodes that follow.
          </p>
          
          <div className="bg-dark p-4 rounded my-4">
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Input Color Space</div>
              <div className="text-warning font-monospace">ACES CC</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Output Color Space</div>
              <div className="text-warning font-monospace">Rec709</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Tone Mapping</div>
              <div className="text-warning font-monospace">DaVinci</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Look Development */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">LOOK DEVELOPMENT</h2>
          <p className="fs-5">
            Three parallel nodes work together to craft the cinematic aesthetic of your footage, each contributing a distinct element to the final look.
          </p>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <h3 className="text-warning mb-3">CONTRAST</h3>
              <p>The top node creates cinematic contrast through a precisely tuned S-curve. This adds depth and dimension to your image by enhancing the separation between shadows, midtones, and highlights while maintaining a natural, film-like roll-off.</p>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-warning mb-3">TEXTURE</h3>
              <p>The middle node creates a reverse S-curve and adds the distinctive Arri texture by modifying the mid detail to -30. This subtle but powerful adjustment brings the tactile quality and microcontrast that defines high-end digital cinema cameras.</p>
            </div>
            
            <div className="col-md-4">
              <h3 className="text-warning mb-3">COLOR TEMPERATURE</h3>
              <p>The bottom node modifies RGB curves to achieve warm highlights and cool shadows - the hallmark of professional cinematography. This creates depth through color temperature contrast while maintaining natural skin tones.</p>
            </div>
          </div>
          
          <div className="bg-dark d-flex align-items-center justify-content-center mt-5" style={{height: '300px', borderRadius: '5px'}}>
            <img src="/images/powergrade/lookbuild.png" alt="Look Development Visualization" className="img-fluid" />
          </div>
        </div>
      </section>
      
      {/* Film LUT */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">FILM LUT</h2>
          <div className="row">
            <div className="col-lg-8">
              <p className="fs-5">
                A compound node structure applies a cinematic film LUT. First, a serial node transforms the color space to Cineon Film Log to prepare for the LUT application. Then, the Rec709 Kodak 2383 D60 LUT is applied, bringing the rich color science and tonal characteristics of this iconic film stock to your digital footage.
              </p>
              <div className="bg-dark p-4 rounded my-4">
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Pre-LUT Transform</div>
                  <div className="text-warning font-monospace">Cineon Film Log</div>
                </div>
                <div className="d-flex justify-content-between border-bottom border-secondary py-2">
                  <div className="text-secondary fw-bold">Applied LUT</div>
                  <div className="text-warning font-monospace">Rec709 Kodak 2383 D60</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="bg-dark d-flex align-items-center justify-content-center" style={{height: '300px', borderRadius: '5px'}}>
                <img src="/images/powergrade/printfilm.png" alt="Film LUT Effect" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Film Saturation */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">FILM SATURATION</h2>
          <p className="fs-5">
            Unlike digital saturation, this compound node adds color density the way photochemical film does - with increasing saturation in proportion to color density. Working in HSV color space, this node creates the rich yet natural saturation characteristics of motion picture film.
          </p>
          
          <div className="ps-4 border-start border-secondary my-4">
            <h4>SAT NODE SETTINGS</h4>
            <p>To adjust the film saturation, you must move inside the compound node and change the gain of the node labeled as "SAT". Higher values create more saturated colors with the distinctive film color response curve.</p>
          </div>
          
          <div className="bg-dark p-4 rounded">
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Color Space</div>
              <div className="text-warning font-monospace">HSV</div>
            </div>
            <div className="d-flex justify-content-between border-bottom border-secondary py-2">
              <div className="text-secondary fw-bold">Saturation Method</div>
              <div className="text-warning font-monospace">Color Density</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skin Tone */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">SKIN TONE</h2>
          <div className="row">
            <div className="col-md-7">
              <p className="fs-5">
                A dedicated node for perfecting skin tones ensures that your subjects look natural and healthy. This node uses advanced qualification techniques to isolate and refine skin tones without affecting the rest of the image, bringing the warm, natural glow that characterizes professional cinematography.
              </p>
            </div>
            <div className="col-md-5">
              <div className="bg-dark d-flex align-items-center justify-content-center overflow-hidden" style={{height: '300px', borderRadius: '5px'}}>
                <img src="/images/powergrade/skintone.png" alt="Skin Tone Correction" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Negative Transformation */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">NEGATIVE TRANSFORMATION</h2>
          <p className="fs-5">
            This compound node creates a specific color tone by transforming colors to negative space. This advanced technique brings unique color relationships that can't be achieved with standard grading tools, resulting in a distinctive cinematic look with complex color interactions.
          </p>
        </div>
      </section>
      
      {/* HSL Adjustments */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">HSL ADJUSTMENTS</h2>
          <p className="fs-5">
            A node with HSL adjustments (default turned off) allows for quick activation of a more pronounced teal and orange look - the color palette that defines modern cinematic aesthetics. When activated, this node enhances color separation while maintaining naturalistic skin tones.
          </p>
        </div>
      </section>
      
      {/* Texture & Blur */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">TEXTURE & BLUR</h2>
          <p className="fs-5">
            Two parallel nodes working in tandem: the top node adds a subtle blur for a filmic smoothness, while the bottom node adds texture with mid details set to -30. Together, they create the tactile quality and microcontrast that distinguishes high-end cinema cameras from standard digital video.
          </p>
        </div>
      </section>
      
      {/* Finishing Nodes */}
      <section className="py-5 border-bottom border-secondary">
        <div className="container">
          <h2 className="display-4 mb-4">FINISHING NODES</h2>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="text-warning mb-4">GRAIN</h3>
              <p className="fs-5">
                A meticulously calibrated grain node adds the organic texture of motion picture film. Unlike digital noise, this grain structure emulates the distinctive pattern and character of photochemical emulsion, bringing warmth and tactile quality to your digital footage.
              </p>
              
              <h3 className="text-warning mb-4 mt-5">HALATION</h3>
              <p className="fs-5">
                This sophisticated node separates highlights and adds two types of blur - one with a yellow tint and another in grayscale. This recreates the iconic halation effect where light scatters within film emulsion, creating the beautiful highlight bloom that defines the film aesthetic.
              </p>
            </div>
            
            <div className="col-lg-6">
              <h3 className="text-warning mb-4">RADIAL BLUR</h3>
              <p className="fs-5">
                A subtle radial blur modified with an ellipse power window adds depth and focus to your image. This emulates the characteristic fall-off of high-end cinema lenses, drawing the viewer's eye to the subject while adding dimension to the frame.
              </p>
              
              <h3 className="text-warning mb-4 mt-5">PRISM BLUR & VIGNETTE</h3>
              <p className="fs-5">
                The prism blur node (with blur strength set to 0 but other settings modified) creates subtle chromatic aberration, emulating the optical characteristics of prime cinema lenses. The final vignette node completes the look with a gentle darkening of the frame edges, enhancing composition and drawing focus to your subject.
              </p>
            </div>
          </div>
          
          <div className="bg-dark d-flex align-items-center justify-content-center mt-5" style={{height: '300px', borderRadius: '5px'}}>
            <img src="/images/powergrade/final.png" alt="Finishing Nodes" className="img-fluid" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="display-4 mb-4">TRANSFORM YOUR FOOTAGE</h2>
          <p className="lead">From ordinary video to cinematic masterpiece</p>
        </div>
      </section>
    </div>
  );
};

export default CineGradeGuide;