# `kubernetes_manifest`

Refer to the Terraform Registory for docs: [`kubernetes_manifest`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest).

# `manifest` Submodule <a name="`manifest` Submodule" id="@cdktf/provider-kubernetes.manifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Manifest <a name="Manifest" id="@cdktf/provider-kubernetes.manifest.Manifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest kubernetes_manifest}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.Manifest(scope: Construct, id: string, config: ManifestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig">ManifestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.manifest.Manifest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig">ManifestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager">putFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWait">putWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor">putWaitFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields">resetComputedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager">resetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor">resetWaitFor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.Manifest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.manifest.Manifest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.manifest.Manifest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.Manifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFieldManager` <a name="putFieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager"></a>

```typescript
public putFieldManager(value: ManifestFieldManager): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putFieldManager.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts"></a>

```typescript
public putTimeouts(value: ManifestTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `putWait` <a name="putWait" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait"></a>

```typescript
public putWait(value: ManifestWait): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putWait.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `putWaitFor` <a name="putWaitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor"></a>

```typescript
public putWaitFor(value: ManifestWaitFor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.Manifest.putWaitFor.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

---

##### `resetComputedFields` <a name="resetComputedFields" id="@cdktf/provider-kubernetes.manifest.Manifest.resetComputedFields"></a>

```typescript
public resetComputedFields(): void
```

##### `resetFieldManager` <a name="resetFieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.resetFieldManager"></a>

```typescript
public resetFieldManager(): void
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-kubernetes.manifest.Manifest.resetObject"></a>

```typescript
public resetObject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWait` <a name="resetWait" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWait"></a>

```typescript
public resetWait(): void
```

##### `resetWaitFor` <a name="resetWaitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.resetWaitFor"></a>

```typescript
public resetWaitFor(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

manifest.Manifest.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

manifest.Manifest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

manifest.Manifest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.manifest.Manifest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor">waitFor</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput">computedFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput">fieldManagerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput">manifestInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput">objectInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput">waitForInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput">waitInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields">computedFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.manifest">manifest</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.object">object</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.manifest.Manifest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.manifest.Manifest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.Manifest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.Manifest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.manifest.Manifest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.manifest.Manifest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.Manifest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.Manifest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fieldManager`<sup>Required</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManager"></a>

```typescript
public readonly fieldManager: ManifestFieldManagerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeouts"></a>

```typescript
public readonly timeouts: ManifestTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a>

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.Manifest.property.wait"></a>

```typescript
public readonly wait: ManifestWaitOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a>

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitFor"></a>

```typescript
public readonly waitFor: ManifestWaitForOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a>

---

##### `computedFieldsInput`<sup>Optional</sup> <a name="computedFieldsInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFieldsInput"></a>

```typescript
public readonly computedFieldsInput: string[];
```

- *Type:* string[]

---

##### `fieldManagerInput`<sup>Optional</sup> <a name="fieldManagerInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.fieldManagerInput"></a>

```typescript
public readonly fieldManagerInput: ManifestFieldManager;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifestInput"></a>

```typescript
public readonly manifestInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.objectInput"></a>

```typescript
public readonly objectInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ManifestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `waitForInput`<sup>Optional</sup> <a name="waitForInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitForInput"></a>

```typescript
public readonly waitForInput: ManifestWaitFor | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> | cdktf.IResolvable

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktf/provider-kubernetes.manifest.Manifest.property.waitInput"></a>

```typescript
public readonly waitInput: ManifestWait;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `computedFields`<sup>Required</sup> <a name="computedFields" id="@cdktf/provider-kubernetes.manifest.Manifest.property.computedFields"></a>

```typescript
public readonly computedFields: string[];
```

- *Type:* string[]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.Manifest.property.manifest"></a>

```typescript
public readonly manifest: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.Manifest.property.object"></a>

```typescript
public readonly object: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.manifest.Manifest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ManifestConfig <a name="ManifestConfig" id="@cdktf/provider-kubernetes.manifest.ManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestConfig: manifest.ManifestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest">manifest</a></code> | <code>{[ key: string ]: any}</code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields">computedFields</a></code> | <code>string[]</code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object">object</a></code> | <code>{[ key: string ]: any}</code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait">wait</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor">waitFor</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.manifest"></a>

```typescript
public readonly manifest: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computedFields`<sup>Optional</sup> <a name="computedFields" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.computedFields"></a>

```typescript
public readonly computedFields: string[];
```

- *Type:* string[]

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.fieldManager"></a>

```typescript
public readonly fieldManager: ManifestFieldManager;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.object"></a>

```typescript
public readonly object: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ManifestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.wait"></a>

```typescript
public readonly wait: ManifestWait;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#wait Manifest#wait}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktf/provider-kubernetes.manifest.ManifestConfig.property.waitFor"></a>

```typescript
public readonly waitFor: ManifestWaitFor;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#wait_for Manifest#wait_for}

---

### ManifestFieldManager <a name="ManifestFieldManager" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestFieldManager: manifest.ManifestFieldManager = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts">forceConflicts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force changes against conflicts. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name">name</a></code> | <code>string</code> | The name to use for the field manager when creating and updating the resource. |

---

##### `forceConflicts`<sup>Optional</sup> <a name="forceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts"></a>

```typescript
public readonly forceConflicts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force changes against conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#force_conflicts Manifest#force_conflicts}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name to use for the field manager when creating and updating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#name Manifest#name}

---

### ManifestTimeouts <a name="ManifestTimeouts" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestTimeouts: manifest.ManifestTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create">create</a></code> | <code>string</code> | Timeout for the create operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete">delete</a></code> | <code>string</code> | Timeout for the delete operation. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update">update</a></code> | <code>string</code> | Timeout for the update operation. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Timeout for the create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#create Manifest#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Timeout for the delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#delete Manifest#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Timeout for the update operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#update Manifest#update}

---

### ManifestWait <a name="ManifestWait" id="@cdktf/provider-kubernetes.manifest.ManifestWait"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWait.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestWait: manifest.ManifestWait = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields">fields</a></code> | <code>{[ key: string ]: string}</code> | A map of paths to fields to wait for a specific field value. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout">rollout</a></code> | <code>boolean \| cdktf.IResolvable</code> | Wait for rollout to complete on resources that support `kubectl rollout status`. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.condition"></a>

```typescript
public readonly condition: IResolvable | ManifestWaitCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#condition Manifest#condition}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.fields"></a>

```typescript
public readonly fields: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of paths to fields to wait for a specific field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#fields Manifest#fields}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWait.property.rollout"></a>

```typescript
public readonly rollout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Wait for rollout to complete on resources that support `kubectl rollout status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#rollout Manifest#rollout}

---

### ManifestWaitCondition <a name="ManifestWaitCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestWaitCondition: manifest.ManifestWaitCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status">status</a></code> | <code>string</code> | The condition status. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type">type</a></code> | <code>string</code> | The type of condition. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

The condition status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#status Manifest#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitCondition.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#type Manifest#type}

---

### ManifestWaitFor <a name="ManifestWaitFor" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

const manifestWaitFor: manifest.ManifestWaitFor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields">fields</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#fields Manifest#fields}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitFor.property.fields"></a>

```typescript
public readonly fields: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.21.0/docs/resources/manifest#fields Manifest#fields}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManifestFieldManagerOutputReference <a name="ManifestFieldManagerOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestFieldManagerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts">resetForceConflicts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceConflicts` <a name="resetForceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts"></a>

```typescript
public resetForceConflicts(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput">forceConflictsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts">forceConflicts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forceConflictsInput`<sup>Optional</sup> <a name="forceConflictsInput" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput"></a>

```typescript
public readonly forceConflictsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `forceConflicts`<sup>Required</sup> <a name="forceConflicts" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts"></a>

```typescript
public readonly forceConflicts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManifestFieldManager;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---


### ManifestTimeoutsOutputReference <a name="ManifestTimeoutsOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManifestTimeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---


### ManifestWaitConditionList <a name="ManifestWaitConditionList" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestWaitConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get"></a>

```typescript
public get(index: number): ManifestWaitConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ManifestWaitCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]

---


### ManifestWaitConditionOutputReference <a name="ManifestWaitConditionOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestWaitConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManifestWaitCondition | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a> | cdktf.IResolvable

---


### ManifestWaitForOutputReference <a name="ManifestWaitForOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestWaitForOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFields` <a name="resetFields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields">fields</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields"></a>

```typescript
public readonly fields: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManifestWaitFor | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a> | cdktf.IResolvable

---


### ManifestWaitOutputReference <a name="ManifestWaitOutputReference" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer"></a>

```typescript
import { manifest } from '@cdktf/provider-kubernetes'

new manifest.ManifestWaitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout">resetRollout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition"></a>

```typescript
public putCondition(value: IResolvable | ManifestWaitCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetFields` <a name="resetFields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields"></a>

```typescript
public resetFields(): void
```

##### `resetRollout` <a name="resetRollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout"></a>

```typescript
public resetRollout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput">rolloutInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields">fields</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout">rollout</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition"></a>

```typescript
public readonly condition: ManifestWaitConditionList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | ManifestWaitCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>[]

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput"></a>

```typescript
public readonly rolloutInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields"></a>

```typescript
public readonly fields: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout"></a>

```typescript
public readonly rollout: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ManifestWait;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---



