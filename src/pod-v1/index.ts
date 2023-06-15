// generated from terraform resource schema

import { PodV1Metadata, 
podV1MetadataToTerraform, 
PodV1MetadataOutputReference, 
PodV1Spec, 
podV1SpecToTerraform, 
PodV1SpecOutputReference, 
PodV1Timeouts, 
podV1TimeoutsToTerraform, 
PodV1TimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PodV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1#id PodV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1#metadata PodV1#metadata}
  */
  readonly metadata: PodV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1#spec PodV1#spec}
  */
  readonly spec: PodV1Spec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1#timeouts PodV1#timeouts}
  */
  readonly timeouts?: PodV1Timeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1 kubernetes_pod_v1}
*/
export class PodV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_pod_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.1/docs/resources/pod_v1 kubernetes_pod_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PodV1Config
  */
  public constructor(scope: Construct, id: string, config: PodV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.21.1',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PodV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PodV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PodV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PodV1Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PodV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PodV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: podV1MetadataToTerraform(this._metadata.internalValue),
      spec: podV1SpecToTerraform(this._spec.internalValue),
      timeouts: podV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
