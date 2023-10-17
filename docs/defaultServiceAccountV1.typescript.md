# `kubernetes_default_service_account_v1`

Refer to the Terraform Registory for docs: [`kubernetes_default_service_account_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1).

# `defaultServiceAccountV1` Submodule <a name="`defaultServiceAccountV1` Submodule" id="@cdktf/provider-kubernetes.defaultServiceAccountV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultServiceAccountV1 <a name="DefaultServiceAccountV1" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1 kubernetes_default_service_account_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1(scope: Construct, id: string, config: DefaultServiceAccountV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config">DefaultServiceAccountV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config">DefaultServiceAccountV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret">putImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken">resetAutomountServiceAccountToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret">resetImagePullSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret">resetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putImagePullSecret` <a name="putImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret"></a>

```typescript
public putImagePullSecret(value: IResolvable | DefaultServiceAccountV1ImagePullSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putImagePullSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata"></a>

```typescript
public putMetadata(value: DefaultServiceAccountV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---

##### `putSecret` <a name="putSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret"></a>

```typescript
public putSecret(value: IResolvable | DefaultServiceAccountV1Secret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putSecret.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts"></a>

```typescript
public putTimeouts(value: DefaultServiceAccountV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

---

##### `resetAutomountServiceAccountToken` <a name="resetAutomountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetAutomountServiceAccountToken"></a>

```typescript
public resetAutomountServiceAccountToken(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImagePullSecret` <a name="resetImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetImagePullSecret"></a>

```typescript
public resetImagePullSecret(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetSecret"></a>

```typescript
public resetSecret(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DefaultServiceAccountV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DefaultServiceAccountV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultServiceAccountV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultServiceAccountV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DefaultServiceAccountV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName">defaultSecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret">imagePullSecret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput">automountServiceAccountTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput">imagePullSecretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput">secretInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken">automountServiceAccountToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultSecretName`<sup>Required</sup> <a name="defaultSecretName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.defaultSecretName"></a>

```typescript
public readonly defaultSecretName: string;
```

- *Type:* string

---

##### `imagePullSecret`<sup>Required</sup> <a name="imagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecret"></a>

```typescript
public readonly imagePullSecret: DefaultServiceAccountV1ImagePullSecretList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList">DefaultServiceAccountV1ImagePullSecretList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadata"></a>

```typescript
public readonly metadata: DefaultServiceAccountV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference">DefaultServiceAccountV1MetadataOutputReference</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secret"></a>

```typescript
public readonly secret: DefaultServiceAccountV1SecretList;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList">DefaultServiceAccountV1SecretList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultServiceAccountV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference">DefaultServiceAccountV1TimeoutsOutputReference</a>

---

##### `automountServiceAccountTokenInput`<sup>Optional</sup> <a name="automountServiceAccountTokenInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountTokenInput"></a>

```typescript
public readonly automountServiceAccountTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imagePullSecretInput`<sup>Optional</sup> <a name="imagePullSecretInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.imagePullSecretInput"></a>

```typescript
public readonly imagePullSecretInput: IResolvable | DefaultServiceAccountV1ImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: DefaultServiceAccountV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | DefaultServiceAccountV1Secret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DefaultServiceAccountV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

---

##### `automountServiceAccountToken`<sup>Required</sup> <a name="automountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.automountServiceAccountToken"></a>

```typescript
public readonly automountServiceAccountToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultServiceAccountV1Config <a name="DefaultServiceAccountV1Config" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

const defaultServiceAccountV1Config: defaultServiceAccountV1.DefaultServiceAccountV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken">automountServiceAccountToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable automatic mounting of the service account token. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret">imagePullSecret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]</code> | image_pull_secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret">secret</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]</code> | secret block. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.metadata"></a>

```typescript
public readonly metadata: DefaultServiceAccountV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#metadata DefaultServiceAccountV1#metadata}

---

##### `automountServiceAccountToken`<sup>Optional</sup> <a name="automountServiceAccountToken" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.automountServiceAccountToken"></a>

```typescript
public readonly automountServiceAccountToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable automatic mounting of the service account token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#automount_service_account_token DefaultServiceAccountV1#automount_service_account_token}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#id DefaultServiceAccountV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imagePullSecret`<sup>Optional</sup> <a name="imagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.imagePullSecret"></a>

```typescript
public readonly imagePullSecret: IResolvable | DefaultServiceAccountV1ImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]

image_pull_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#image_pull_secret DefaultServiceAccountV1#image_pull_secret}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.secret"></a>

```typescript
public readonly secret: IResolvable | DefaultServiceAccountV1Secret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#secret DefaultServiceAccountV1#secret}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultServiceAccountV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#timeouts DefaultServiceAccountV1#timeouts}

---

### DefaultServiceAccountV1ImagePullSecret <a name="DefaultServiceAccountV1ImagePullSecret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

const defaultServiceAccountV1ImagePullSecret: defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Metadata <a name="DefaultServiceAccountV1Metadata" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

const defaultServiceAccountV1Metadata: defaultServiceAccountV1.DefaultServiceAccountV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the service account that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service account. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the service account must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the service account that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#annotations DefaultServiceAccountV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the service account.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#labels DefaultServiceAccountV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the service account, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the service account must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#namespace DefaultServiceAccountV1#namespace}

---

### DefaultServiceAccountV1Secret <a name="DefaultServiceAccountV1Secret" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

const defaultServiceAccountV1Secret: defaultServiceAccountV1.DefaultServiceAccountV1Secret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name">name</a></code> | <code>string</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#name DefaultServiceAccountV1#name}

---

### DefaultServiceAccountV1Timeouts <a name="DefaultServiceAccountV1Timeouts" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

const defaultServiceAccountV1Timeouts: defaultServiceAccountV1.DefaultServiceAccountV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#create DefaultServiceAccountV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.23.0/docs/resources/default_service_account_v1#create DefaultServiceAccountV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultServiceAccountV1ImagePullSecretList <a name="DefaultServiceAccountV1ImagePullSecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get"></a>

```typescript
public get(index: number): DefaultServiceAccountV1ImagePullSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultServiceAccountV1ImagePullSecret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>[]

---


### DefaultServiceAccountV1ImagePullSecretOutputReference <a name="DefaultServiceAccountV1ImagePullSecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultServiceAccountV1ImagePullSecret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1ImagePullSecret">DefaultServiceAccountV1ImagePullSecret</a>

---


### DefaultServiceAccountV1MetadataOutputReference <a name="DefaultServiceAccountV1MetadataOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DefaultServiceAccountV1Metadata;
```

- *Type:* <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Metadata">DefaultServiceAccountV1Metadata</a>

---


### DefaultServiceAccountV1SecretList <a name="DefaultServiceAccountV1SecretList" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1SecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get"></a>

```typescript
public get(index: number): DefaultServiceAccountV1SecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultServiceAccountV1Secret[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>[]

---


### DefaultServiceAccountV1SecretOutputReference <a name="DefaultServiceAccountV1SecretOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1SecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultServiceAccountV1Secret;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Secret">DefaultServiceAccountV1Secret</a>

---


### DefaultServiceAccountV1TimeoutsOutputReference <a name="DefaultServiceAccountV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { defaultServiceAccountV1 } from '@cdktf/provider-kubernetes'

new defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultServiceAccountV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-kubernetes.defaultServiceAccountV1.DefaultServiceAccountV1Timeouts">DefaultServiceAccountV1Timeouts</a>

---



