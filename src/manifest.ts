// https://www.terraform.io/docs/providers/kubernetes/r/manifest.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Kubernetes manifest describing the desired state of the resource in HCL format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#manifest Manifest#manifest}
  */
  readonly manifest: { [key: string]: any };
  /**
  * The resulting resource state, as returned by the API server after applying the desired state from `manifest`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#object Manifest#object}
  */
  readonly object?: { [key: string]: any };
  /**
  * A map of attribute paths and desired patterns to be matched. After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#wait_for Manifest#wait_for}
  */
  readonly waitFor?: ManifestWaitFor;
}
export interface ManifestWaitFor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html#fields Manifest#fields}
  */
  readonly fields?: { [key: string]: string };
}

function manifestWaitForToTerraform(struct?: ManifestWaitFor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fields: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.fields),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html kubernetes_manifest}
*/
export class Manifest extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/manifest.html kubernetes_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_manifest',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._manifest = config.manifest;
    this._object = config.object;
    this._waitFor = config.waitFor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // manifest - computed: false, optional: false, required: true
  private _manifest: { [key: string]: any };
  public get manifest() {
    return this.interpolationForAttribute('manifest') as any;
  }
  public set manifest(value: { [key: string]: any }) {
    this._manifest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: any }
  public get object(): { [key: string]: any } {
    return this.interpolationForAttribute('object') as any; // Getting the computed value is not yet implemented
  }
  public set object(value: { [key: string]: any }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object
  }

  // wait_for - computed: false, optional: true, required: false
  private _waitFor?: ManifestWaitFor;
  public get waitFor() {
    return this.interpolationForAttribute('wait_for') as any;
  }
  public set waitFor(value: ManifestWaitFor ) {
    this._waitFor = value;
  }
  public resetWaitFor() {
    this._waitFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      manifest: cdktf.hashMapper(cdktf.anyToTerraform)(this._manifest),
      object: cdktf.hashMapper(cdktf.anyToTerraform)(this._object),
      wait_for: manifestWaitForToTerraform(this._waitFor),
    };
  }
}
