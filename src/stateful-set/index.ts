// generated from terraform resource schema

import { StatefulSetMetadata, 
statefulSetMetadataToTerraform, 
StatefulSetMetadataOutputReference, 
StatefulSetSpec, 
statefulSetSpecToTerraform, 
StatefulSetSpecOutputReference, 
StatefulSetTimeouts, 
statefulSetTimeoutsToTerraform, 
StatefulSetTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StatefulSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#id StatefulSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Wait for the rollout of the stateful set to complete. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#wait_for_rollout StatefulSet#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#metadata StatefulSet#metadata}
  */
  readonly metadata: StatefulSetMetadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#spec StatefulSet#spec}
  */
  readonly spec: StatefulSetSpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set#timeouts StatefulSet#timeouts}
  */
  readonly timeouts?: StatefulSetTimeouts;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set kubernetes_stateful_set}
*/
export class StatefulSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_stateful_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/stateful_set kubernetes_stateful_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatefulSetConfig
  */
  public constructor(scope: Construct, id: string, config: StatefulSetConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_stateful_set',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '2.15.0',
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
    this._waitForRollout = config.waitForRollout;
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

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new StatefulSetMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: StatefulSetMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new StatefulSetSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: StatefulSetSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StatefulSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StatefulSetTimeouts) {
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
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      metadata: statefulSetMetadataToTerraform(this._metadata.internalValue),
      spec: statefulSetSpecToTerraform(this._spec.internalValue),
      timeouts: statefulSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
