'use client';

const CineGradeGuide = () => {
  return (
    <div className="bg-black text-white">
      {/* Header */}
      <section 
        className="py-20 text-center"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9))', 
          backgroundSize: 'cover',
          padding: '100px 0'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            LUMINORA <span className="text-[#FF6B00]">POWERGRADE</span>
          </h1>
          <p className="text-xl md:text-2xl my-8 text-gray-300">
            Professional color grading workflow inspired by high-end cinema cameras
          </p>
        </div>
      </section>
      
      {/* Workflow Overview */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">WORKFLOW</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <p className="text-xl leading-relaxed mb-8">
                A meticulously crafted node structure that transforms ordinary footage into cinematic masterpieces. This PowerGrade emulates the look and feel of footage shot on high-end cinema cameras, with film-like characteristics, balanced highlights and shadows, and the texture that defines professional cinematography.
              </p>
              <div className="italic text-2xl text-gray-400 my-12 text-center px-8">
                &ldquo;The right color grade doesn&apos;t just correct an img &mdash; it tells a story.&rdquo;
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#29282f] flex items-center justify-center h-80 rounded-lg relative">
                <img
                  src="/images/powergrade/overview.png"
                  alt="CineGrade Overview"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-[#29282f] p-6 rounded-lg mt-12">
            <h4 className="text-2xl font-bold mb-6">NODE STRUCTURE</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Input Device Transformation</div>
                <div className="text-[#FF6B00] font-mono">→ ACES CC & AP0</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Parallel Correction Nodes</div>
                <div className="text-[#FF6B00] font-mono">× 3</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Kodak Print Color Node</div>
                <div className="text-[#FF6B00] font-mono">Serial</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">ACES → Rec709 Transformation</div>
                <div className="text-[#FF6B00] font-mono">CST</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Look Development Nodes</div>
                <div className="text-[#FF6B00] font-mono">× 3 Parallel</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Film LUT Application</div>
                <div className="text-[#FF6B00] font-mono">Compound</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Film Saturation</div>
                <div className="text-[#FF6B00] font-mono">Compound</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Skin Tone Correction</div>
                <div className="text-[#FF6B00] font-mono">Serial</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Finishing Nodes</div>
                <div className="text-[#FF6B00] font-mono">× 6</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Input Device Transformation */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">INPUT DEVICE TRANSFORMATION</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-xl leading-relaxed mb-8">
                The foundation of our PowerGrade begins with transforming your footage to the Academy Color Encoding System (ACES) colorspace and AP0 primaries. This critical first step provides a standardized, high-dynamic-range, wide-gamut foundation that ensures consistency across different camera systems and preserves all the nuances of your original footage.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg my-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Input Colorspace</div>
                    <div className="text-[#FF6B00] font-mono">Camera Native</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Output Colorspace</div>
                    <div className="text-[#FF6B00] font-mono">ACES CC</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Output Primaries</div>
                    <div className="text-[#FF6B00] font-mono">AP0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-[#29282f] flex items-center justify-center h-80 rounded-lg">
                <img
                  src="/images/powergrade/CST.png"
                  alt="Input Device Transformation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Parallel Correction Nodes */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">CORRECTION NODES</h2>
          <p className="text-xl leading-relaxed mb-12">
            Three parallel nodes work in harmony to correct and enhance your footage, each serving a specific purpose in balancing the img and retrieving cinematic qualities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-4">EXPOSURE</h3>
              <p className="mb-6 leading-relaxed">
                Precision-tuned exposure adjustments compress highlights to achieve that balanced, film-like exposure look. The carefully calibrated settings prevent digital clipping while maintaining the rich gradation that characterizes high-end cinema cameras.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Highlights</div>
                    <div className="text-[#FF6B00] font-mono">Compressed</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Midtones</div>
                    <div className="text-[#FF6B00] font-mono">Balanced</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-4">WHITE BALANCE</h3>
              <p className="mb-6 leading-relaxed">
                A specialized white balance node with reduced gain (0.2) provides subtle but critical color temperature adjustments. This refinement ensures natural skin tones and atmospheric color temperature that can be fine-tuned with the gain wheel.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Gain</div>
                    <div className="text-[#FF6B00] font-mono">0.2</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Adjustment</div>
                    <div className="text-[#FF6B00] font-mono">Gain Wheel</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-4">HDR RETRIEVAL</h3>
              <p className="mb-6 leading-relaxed">
                This specialized node recovers the true HDR look of high-end cinema cameras. Using a luminance mask created with the qualifier and a specified luminance curve, it retrieves critical shadow details that bring depth and dimension to your footage.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Mask Type</div>
                    <div className="text-[#FF6B00] font-mono">Luminance</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Tool</div>
                    <div className="text-[#FF6B00] font-mono">Qualifier</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#29282f] flex items-center justify-center mt-12 h-80 rounded-lg">
            <img src="/images/powergrade/correction.png" alt="Correction Nodes" fill className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      
      {/* Kodak Print Color */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">KODAK PRINT COLOR</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <p className="text-xl leading-relaxed mb-8">
                After combining the three correction nodes, a serial node creates the iconic Kodak print color tone. This node is meticulously calibrated with tweaked RGB values to emulate the distinctive color science that made Kodak film stocks legendary in cinema history.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Red Channel</div>
                    <div className="text-[#FF6B00] font-mono">Custom Balanced</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Green Channel</div>
                    <div className="text-[#FF6B00] font-mono">Custom Balanced</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Blue Channel</div>
                    <div className="text-[#FF6B00] font-mono">Custom Balanced</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-[#29282f] flex items-center justify-center h-80 rounded-lg">
                <img src="/images/powergrade/kodakprintcolor.png" className="max-w-full h-auto" alt="Kodak Print Color" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CST Transformation */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">CST</h2>
          <p className="text-xl leading-relaxed mb-8">
            The Color Space Transform node carefully converts our ACES colorspace footage back to Rec709, ensuring that all previous transformations&apos; outputs match properly with this node&apos;s input. This critical step maintains color fidelity while preparing the img for the creative look development nodes that follow.
          </p>
          
          <div className="bg-[#29282f] p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Input Color Space</div>
                <div className="text-[#FF6B00] font-mono">ACES CC</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Output Color Space</div>
                <div className="text-[#FF6B00] font-mono">Rec709</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Tone Mapping</div>
                <div className="text-[#FF6B00] font-mono">DaVinci</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Look Development */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">LOOK DEVELOPMENT</h2>
          <p className="text-xl leading-relaxed mb-12">
            Three parallel nodes work together to craft the cinematic aesthetic of your footage, each contributing a distinct element to the final look.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6">CONTRAST</h3>
              <p className="leading-relaxed">
                The top node creates cinematic contrast through a precisely tuned S-curve. This adds depth and dimension to your img by enhancing the separation between shadows, midtones, and highlights while maintaining a natural, film-like roll-off.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6">TEXTURE</h3>
              <p className="leading-relaxed">
                The middle node creates a reverse S-curve and adds the distinctive Arri texture by modifying the mid detail to -30. This subtle but powerful adjustment brings the tactile quality and microcontrast that defines high-end digital cinema cameras.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6">COLOR TEMPERATURE</h3>
              <p className="leading-relaxed">
                The bottom node modifies RGB curves to achieve warm highlights and cool shadows - the hallmark of professional cinematography. This creates depth through color temperature contrast while maintaining natural skin tones.
              </p>
            </div>
          </div>
          
          <div className="bg-[#29282f] flex items-center justify-center mt-12 h-80 rounded-lg">
            <img src="/images/powergrade/lookbuild.png" alt="Look Development Visualization" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      
      {/* Film LUT */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">FILM LUT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <p className="text-xl leading-relaxed mb-8">
                A compound node structure applies a cinematic film LUT. First, a serial node transforms the color space to Cineon Film Log to prepare for the LUT application. Then, the Rec709 Kodak 2383 D60 LUT is applied, bringing the rich color science and tonal characteristics of this iconic film stock to your digital footage.
              </p>
              <div className="bg-[#29282f] p-6 rounded-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Pre-LUT Transform</div>
                    <div className="text-[#FF6B00] font-mono">Cineon Film Log</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                    <div className="text-gray-400 font-bold">Applied LUT</div>
                    <div className="text-[#FF6B00] font-mono">Rec709 Kodak 2383 D60</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-[#29282f] flex items-center justify-center h-80 rounded-lg">
                <img src="/images/powergrade/printfilm.png" alt="Film LUT Effect" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Film Saturation */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">FILM SATURATION</h2>
          <p className="text-xl leading-relaxed mb-8">
            Unlike digital saturation, this compound node adds color density the way photochemical film does - with increasing saturation in proportion to color density. Working in HSV color space, this node creates the rich yet natural saturation characteristics of motion picture film.
          </p>
          
          <div className="pl-6 border-l-4 border-gray-600 my-8">
            <h4 className="text-xl font-bold mb-2">SAT NODE SETTINGS</h4>
            <p className="leading-relaxed">
              To adjust the film saturation, you must move inside the compound node and change the gain of the node labeled as &quot;SAT&quot;. Higher values create more saturated colors with the distinctive film color response curve.
            </p>
          </div>
          
          <div className="bg-[#29282f] p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Color Space</div>
                <div className="text-[#FF6B00] font-mono">HSV</div>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-3">
                <div className="text-gray-400 font-bold">Saturation Method</div>
                <div className="text-[#FF6B00] font-mono">Color Density</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skin Tone */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">SKIN TONE</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <p className="text-xl leading-relaxed">
                A dedicated node for perfecting skin tones ensures that your subjects look natural and healthy. This node uses advanced qualification techniques to isolate and refine skin tones without affecting the rest of the img, bringing the warm, natural glow that characterizes professional cinematography.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="bg-[#29282f] flex items-center justify-center overflow-hidden h-80 rounded-lg">
                <img src="/images/powergrade/skintone.png" alt="Skin Tone Correction" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Negative Transformation */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">NEGATIVE TRANSFORMATION</h2>
          <p className="text-xl leading-relaxed">
            This compound node creates a specific color tone by transforming colors to negative space. This advanced technique brings unique color relationships that can&apos;t be achieved with standard grading tools, resulting in a distinctive cinematic look with complex color interactions.
          </p>
        </div>
      </section>
      
      {/* HSL Adjustments */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">HSL ADJUSTMENTS</h2>
          <p className="text-xl leading-relaxed">
            A node with HSL adjustments (default turned off) allows for quick activation of a more pronounced teal and orange look - the color palette that defines modern cinematic aesthetics. When activated, this node enhances color separation while maintaining naturalistic skin tones.
          </p>
        </div>
      </section>
      
      {/* Texture & Blur */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">TEXTURE & BLUR</h2>
          <p className="text-xl leading-relaxed">
            Two parallel nodes working in tandem: the top node adds a subtle blur for a filmic smoothness, while the bottom node adds texture with mid details set to -30. Together, they create the tactile quality and microcontrast that distinguishes high-end cinema cameras from standard digital video.
          </p>
        </div>
      </section>
      
      {/* Finishing Nodes */}
      <section className="py-20 border-b border-gray-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">FINISHING NODES</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6">GRAIN</h3>
              <p className="text-xl leading-relaxed mb-8">
                A meticulously calibrated grain node adds the organic texture of motion picture film. Unlike digital noise, this grain structure emulates the distinctive pattern and character of photochemical emulsion, bringing warmth and tactile quality to your digital footage.
              </p>
              
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6 mt-12">HALATION</h3>
              <p className="text-xl leading-relaxed">
                This sophisticated node separates highlights and adds two types of blur - one with a yellow tint and another in grayscale. This recreates the iconic halation effect where light scatters within film emulsion, creating the beautiful highlight bloom that defines the film aesthetic.
              </p>
            </div>
            
            <div>
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6">RADIAL BLUR</h3>
              <p className="text-xl leading-relaxed mb-8">
                A subtle radial blur modified with an ellipse power window adds depth and focus to your img. This emulates the characteristic fall-off of high-end cinema lenses, drawing the viewer&apos;s eye to the subject while adding dimension to the frame.
              </p>
              
              <h3 className="text-[#FF6B00] text-2xl font-bold mb-6 mt-12">PRISM BLUR & VIGNETTE</h3>
              <p className="text-xl leading-relaxed">
                The prism blur node (with blur strength set to 0 but other settings modified) creates subtle chromatic aberration, emulating the optical characteristics of prime cinema lenses. The final vignette node completes the look with a gentle darkening of the frame edges, enhancing composition and drawing focus to your subject.
              </p>
            </div>
          </div>
          
          <div className="bg-[#29282f] flex items-center justify-center mt-12 h-80 rounded-lg">
            <img src="/images/powergrade/final.png" alt="Finishing Nodes" className="max-w-full h-auto" />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">TRANSFORM YOUR FOOTAGE</h2>
          <p className="text-xl md:text-2xl text-gray-300">From ordinary video to cinematic masterpiece</p>
        </div>
      </section>
    </div>
  );
};

export default CineGradeGuide;